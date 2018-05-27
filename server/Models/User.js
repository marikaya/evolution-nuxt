
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            validate: {
                isEmail: true
            }
        },
        password: DataTypes.STRING,
        passwordResetToken: DataTypes.STRING,
        passwordResetExpires: DataTypes.DATE,

        facebook: DataTypes.STRING,
        twitter: DataTypes.STRING,
        google: DataTypes.STRING,
        tokens: DataTypes.JSON,

        birthDay: DataTypes.DATE,
        givenName: DataTypes.STRING,
        familyName: DataTypes.STRING,
        gender: {
            type: DataTypes.ENUM,
            values: ['male', 'female', 'unspecified'],
            defaultValue: 'male',
        },
        picture: DataTypes.STRING,
        coverImage: DataTypes.JSON
    });

    User.associate = function(models) {
        User.belongsToMany(models.Role, {as: 'Roles', through: 'UserRoles', foreignKey: 'userId'});
    };

    User.prototype.comparePassword = function comparePassword(candidatePassword, cb) {
       /* bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            cb(err, isMatch);
        });*/
    };
    User.prototype.getFullname = function() {
        return [this.givenName, this.familyName].join(' ');
    };

    User.hook('beforeSave', (user, options) => {
        if (!user.changed('password')) {
            return true;
        }
        return new Promise((resolve,reject) => {
            /*bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    reject(err);
                }
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) {
                        return reject(err);
                    }
                    user.password = hash;
                    resolve()
                });
            });*/
        })
    });

    return User;
};
