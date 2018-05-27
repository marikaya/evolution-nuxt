const passport = require('passport')

module.exports = {
    register: (req, res, next) => {
        req.assert('username', 'Geçersiz kullanıcı adı!').len(3);
        req.assert('email', 'Geçersiz bir email adresi').isEmail();
        req.assert('password', 'Şifreniz en az 4 karakter uzunluğunda olmalı. ').len(4);
        req.assert('passwordConfirm', 'Şifreler uyuşmuyor').equals(req.body.password);
        req.sanitize('email').normalizeEmail({gmail_remove_dots: false});

        const errors = req.validationErrors();

        if (errors) {
            return res.json({'error': true, 'errors': errors});
        }

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const criteria = {$or: [{username: req.body.username}, {email: req.body.email}]};

        return User.findOne(criteria, function (err, existingUser) {

            if (err) {
                return next(err);
            }

            if (existingUser) {
                return res.json({error: true, errors: 'Bu hesap daha önce tanımlanmış ( ͡° ͜ʖ ͡°)'});
            }

            user.save((err) => {
                if (err) {
                    return next(err);
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }
                    req.session.user = user;
                    res.json(user);
                });
            });
        });
    },
    login: (req, res, next) => {
        req.assert('username', 'Kullanıcı adı veya Email adresi geçersiz').notEmpty()
        req.assert('password', 'Şifre boş bırakılamaz').notEmpty()

        const errors = req.validationErrors()
        if (errors) {
            return res.status(401).json({'error': true, 'errors': errors})
        }
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err)
            }
            if (!user) {
                return res.status(401).json({'error': true, 'errors': info})
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err)
                }
                if (req.body.rememberme) {
                    req.session.cookie.maxAge = 2629746000
                }
                req.session.user = user
                return res.json(user)
            });
        })(req, res, next)
    },
    logout: (req, res, next) => {
        req.logout();
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            }

            // destroy session data
            req.session = null;

            // redirect to homepage
            res.json({});
        });
    }
}
