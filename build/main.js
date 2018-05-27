require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUrlSlugs = __webpack_require__(6);

var _mongooseUrlSlugs2 = _interopRequireDefault(_mongooseUrlSlugs);

var _mongooseVoting = __webpack_require__(7);

var _mongooseVoting2 = _interopRequireDefault(_mongooseVoting);

var _episode = __webpack_require__(2);

var _episode2 = _interopRequireDefault(_episode);

var _genre = __webpack_require__(10);

var _genre2 = _interopRequireDefault(_genre);

var _comment = __webpack_require__(8);

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var AnimeSchema = new Schema({
    canonicalTitle: {
        type: String
    },
    titles: Schema.Types.Mixed,
    kitsuId: {
        type: Number
    },
    synopsis: {
        type: String
    },
    averageRating: {
        type: Number
    },
    status: {
        type: String
    },
    ageRating: {
        type: String
    },
    ageRatingGuide: {
        type: String
    },
    ratingRank: {
        type: Number
    },
    popularityRank: {
        type: Number
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    youtubeVideoId: {
        type: String
    },
    posterImages: {
        type: Schema.Types.Mixed
    },
    coverImages: {
        type: Schema.Types.Mixed
    },
    metaCount: {
        type: Number
    },
    episodes: [{ type: Schema.Types.ObjectId, ref: _episode2.default }],
    genres: [{ type: Schema.Types.ObjectId, ref: _genre2.default }]
}, { timestamps: true, toJSON: { virtuals: true } });

AnimeSchema.virtual('relatedEpisodes', {
    ref: 'Episode',
    localField: '_id',
    foreignField: 'anime',
    justOne: false
});

AnimeSchema.virtual('relatedGenres', {
    ref: 'Genre',
    localField: 'genres',
    foreignField: '_id',
    justOne: false
});

AnimeSchema.virtual('relatedComments', {
    ref: _comment2.default,
    localField: '_id',
    foreignField: 'animeId',
    justOne: false
});

AnimeSchema.plugin((0, _mongooseUrlSlugs2.default)('canonicalTitle'));
AnimeSchema.plugin(_mongooseVoting2.default, { ref: 'User' });

exports.default = _mongoose2.default.model('Anime', AnimeSchema);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseVoting = __webpack_require__(7);

var _mongooseVoting2 = _interopRequireDefault(_mongooseVoting);

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

var _comment = __webpack_require__(8);

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var EpisodeSchema = new Schema({
    canonicalTitle: {
        type: String
    },
    synopsis: {
        type: String
    },
    seasonNumber: {
        type: Number
    },
    episode: {
        type: Number
    },
    relativeNumber: {
        type: Number
    },
    airDate: {
        type: Date
    },
    kitsuReleaseDate: {
        type: Date
    },
    anime: {
        type: Schema.Types.ObjectId,
        ref: _anime2.default
    }
}, { timestamps: true, toJSON: { virtuals: true } });

EpisodeSchema.virtual('relatedAnime', {
    ref: 'Anime',
    localField: 'anime',
    foreignField: '_id',
    justOne: true
});

EpisodeSchema.virtual('relatedComments', {
    ref: _comment2.default,
    localField: '_id',
    foreignField: 'episodeId',
    justOne: false
});

EpisodeSchema.index({ kitsuReleaseDate: -1 });
EpisodeSchema.plugin(_mongooseVoting2.default, { ref: 'User' });

exports.default = _mongoose2.default.model('Episode', EpisodeSchema);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = __webpack_require__(25);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _crypto = __webpack_require__(26);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

    facebook: String,
    twitter: String,
    google: String,
    tokens: Array,

    meta: {
        birthDay: Date,
        givenName: String,
        familyName: String,
        gender: {
            type: String,
            enum: ['male', 'female', 'unspecified']
        },
        picture: String,
        coverImage: {
            posX: Number,
            posY: Number,
            uri: String
        }
    }
}, { timestamps: true, toJSON: { virtuals: true } });

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    _bcrypt2.default.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
        cb(err, isMatch);
    });
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.virtual('gravatar').get(function () {
    if (!this.email) {
        return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
    }
    var md5 = _crypto2.default.createHash('md5').update(this.email).digest('hex');
    var sizes = {
        micro: 16,
        nano: 24,
        tiny: 32,
        small: 48,
        medium: 64,
        large: 96,
        xlarge: 128,
        huge: 256
    };

    return Object.keys(sizes).reduce(function (previous, current) {
        previous[current] = 'https://gravatar.com/avatar/' + md5 + '?s=' + sizes[current] + '&d=retro';
        ;
        return previous;
    }, {});
});

userSchema.virtual('fullName').get(function () {
    if (!this.meta.givenName && !this.meta.familyName) {
        return false;
    }
    return this.meta.givenName + ' ' + this.meta.familyName;
});

userSchema.virtual('gender').get(function () {
    var gender = 'Belirtilmemiş';
    switch (this.meta.gender) {
        case 'male':
            gender = 'Erkek';
            break;
        case 'female':
            gender = 'Kadın';
            break;
    }
    return gender;
});

userSchema.virtual('age').get(function () {
    if (!this.meta.birthDay) {
        return 'Belirtilmemiş.';
    }

    var today = new Date();
    var birthDate = new Date(this.meta.birthDay);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
});

exports.default = _mongoose2.default.model('User', userSchema);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("mongoose-url-slugs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose-voting");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

var _news = __webpack_require__(9);

var _news2 = _interopRequireDefault(_news);

var _episode = __webpack_require__(2);

var _episode2 = _interopRequireDefault(_episode);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: _user2.default },
    body: {
        type: String
    },
    replies: [{
        author: { type: Schema.Types.ObjectId, ref: _user2.default },
        body: { type: String }
    }],
    animeId: { type: Schema.Types.ObjectId, ref: _anime2.default },
    episodeId: { type: Schema.Types.ObjectId, ref: _episode2.default },
    newsId: { type: Schema.Types.ObjectId, ref: _news2.default }
}, { timestamps: true, toJSON: { virtuals: true } });

CommentSchema.virtual('relatedAuthor', {
    ref: 'User',
    localField: 'author',
    foreignField: '_id',
    justOne: true
});

CommentSchema.index({ newsId: 1, episodeId: 1, animeId: 1 });

exports.default = _mongoose2.default.model('Comment', CommentSchema);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUrlSlugs = __webpack_require__(6);

var _mongooseUrlSlugs2 = _interopRequireDefault(_mongooseUrlSlugs);

var _mongooseVoting = __webpack_require__(7);

var _mongooseVoting2 = _interopRequireDefault(_mongooseVoting);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

var _comment = __webpack_require__(8);

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var NewsSchema = new Schema({
    canonicalTitle: {
        type: String
    },
    featuredImage: {
        type: String
    },
    shortContent: {
        type: String
    },
    content: {
        type: String
    },
    status: {
        type: Boolean
    },
    view: {
        type: Number
    },
    author: { type: Schema.Types.ObjectId, ref: _user2.default }
}, { timestamps: true, toJSON: { virtuals: true } });

NewsSchema.virtual('relatedAuthor', {
    ref: 'User',
    localField: 'author',
    foreignField: '_id',
    justOne: true
});

NewsSchema.virtual('relatedComments', {
    ref: _comment2.default,
    localField: '_id',
    foreignField: 'newsId',
    justOne: false
});

NewsSchema.plugin((0, _mongooseUrlSlugs2.default)('canonicalTitle'));
NewsSchema.plugin(_mongooseVoting2.default, { ref: 'User' });

exports.default = _mongoose2.default.model('News', NewsSchema);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUrlSlugs = __webpack_require__(6);

var _mongooseUrlSlugs2 = _interopRequireDefault(_mongooseUrlSlugs);

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var GenreSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    anime: [{ type: Schema.Types.ObjectId, ref: _anime2.default }]
});
GenreSchema.plugin((0, _mongooseUrlSlugs2.default)('name'));
var genreModel = _mongoose2.default.model('Genre', GenreSchema);
exports.default = genreModel;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Core Elements
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


/**
 * Routes
 */


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(14);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(15);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = __webpack_require__(16);

var _cors2 = _interopRequireDefault(_cors);

var _helmet = __webpack_require__(17);

var _helmet2 = _interopRequireDefault(_helmet);

var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _compression = __webpack_require__(18);

var _compression2 = _interopRequireDefault(_compression);

var _expressSession = __webpack_require__(19);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _chalk = __webpack_require__(11);

var _chalk2 = _interopRequireDefault(_chalk);

var _errorhandler = __webpack_require__(20);

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _expressValidator = __webpack_require__(21);

var _expressValidator2 = _interopRequireDefault(_expressValidator);

__webpack_require__(22);

var _nuxt = __webpack_require__(23);

var _models = __webpack_require__(24);

var _api = __webpack_require__(27);

var _api2 = _interopRequireDefault(_api);

var _bot = __webpack_require__(31);

var _bot2 = _interopRequireDefault(_bot);

var _user = __webpack_require__(38);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MongoStore = __webpack_require__(40)(_expressSession2.default);
var passportLib = __webpack_require__(41);

var App = function () {
    function App(config) {
        _classCallCheck(this, App);

        this.port = config.port;
        this.express = (0, _express2.default)();
    }

    _createClass(App, [{
        key: 'initialize',
        value: async function initialize() {
            await this.configureMiddleware();
            await this.configureRoutes();
        }
    }, {
        key: 'start',
        value: function start() {
            var server = this.express.listen(this.port, '0.0.0.0', function () {
                console.log('%s App is running at http://localhost:%d in %s mode', _chalk2.default.green('✓'), server.address().port, "production");
                console.log('  Press CTRL-C to stop\n');
            });
        }
    }, {
        key: 'configureMiddleware',
        value: function configureMiddleware() {
            var options = { server: { socketOptions: { keepAlive: 1 } } };
            _mongoose2.default.connect(process.env.DB_HOST, options);
            _mongoose2.default.connection.on('error', function (err) {
                console.error(err);
                console.log('%s MongoDB connection error. Please make sure MongoDB is running.', _chalk2.default.red('✗'));
                process.exit();
            });

            var expressApp = this.express;
            expressApp.use((0, _morgan2.default)('dev'));
            expressApp.use(_bodyParser2.default.json());
            expressApp.use(_bodyParser2.default.urlencoded({ extended: true }));
            expressApp.use((0, _expressValidator2.default)());
            expressApp.use((0, _cors2.default)({
                origin: ['http://localhost:3000'],
                methods: ['GET', 'POST'],
                credentials: true
            }));
            expressApp.use((0, _helmet2.default)());
            expressApp.use((0, _compression2.default)({ filter: this.shouldCompress }));
            expressApp.set('trust proxy', 1);
            expressApp.use((0, _expressSession2.default)({
                name: 'anizm.tv',
                secret: process.env.TOKEN_SECRET,
                store: new MongoStore({ mongooseConnection: _mongoose2.default.connection }),
                resave: true,
                rolling: true,
                saveUninitialized: true,
                cookie: { maxAge: 86400000 }
            }));
            expressApp.use(_passport2.default.initialize());
            expressApp.use(_passport2.default.session());
            expressApp.use((0, _errorhandler2.default)());
        }
    }, {
        key: 'configureRoutes',
        value: function configureRoutes() {
            var expressApp = this.express;
            expressApp.use('/api', _api2.default);
            expressApp.use('/fetch', _bot2.default);
            expressApp.use('/user', _user2.default);
            expressApp.use(nuxt.render);
        }
    }], [{
        key: 'shouldCompress',
        value: function shouldCompress(req, res) {
            if (req.headers['x-no-compression']) {
                return false;
            }
            return _compression2.default.filter(req, res);
        }
    }]);

    return App;
}();

var app = new App({ port: 3000 });
var config = __webpack_require__(46);
config.dev = !("production" === 'production');

var nuxt = new _nuxt.Nuxt(config);
var trigger = config.dev ? new _nuxt.Builder(nuxt).build() : Promise.resolve();
trigger.then(function () {
    app.initialize().then(function () {
        app.start();
    });
});
trigger.catch(function (error) {
    console.log(error);
    process.exit(1);
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = exports.News = exports.Genre = exports.Episode = exports.Anime = undefined;

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

var _episode = __webpack_require__(2);

var _episode2 = _interopRequireDefault(_episode);

var _genre = __webpack_require__(10);

var _genre2 = _interopRequireDefault(_genre);

var _news = __webpack_require__(9);

var _news2 = _interopRequireDefault(_news);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Anime = _anime2.default;
exports.Episode = _episode2.default;
exports.Genre = _genre2.default;
exports.News = _news2.default;
exports.User = _user2.default;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _anime_controller = __webpack_require__(28);

var _anime_controller2 = _interopRequireDefault(_anime_controller);

var _news_controller = __webpack_require__(30);

var _news_controller2 = _interopRequireDefault(_news_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/anime/getlatest', _anime_controller2.default.getLatest);
router.get('/anime/getEpisodes', _anime_controller2.default.getEpisodes);
router.get('/anime/getFeatured', _anime_controller2.default.getFeatured);
router.get('/anime/get', _anime_controller2.default.get);

router.get('/news/get', _news_controller2.default.get);

exports.default = router;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _episode = __webpack_require__(2);

var _episode2 = _interopRequireDefault(_episode);

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

var _uniqBy = __webpack_require__(29);

var _uniqBy2 = _interopRequireDefault(_uniqBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {};
controller.getLatest = function (req, res) {
    var episodeQuery = _episode2.default.aggregate([{ $sort: { kitsuReleaseDate: -1 } }, {
        $lookup: {
            from: 'animes',
            localField: 'anime',
            foreignField: '_id',
            as: 'relatedAnime'
        }
    }, { $unwind: '$relatedAnime' }, { $limit: 300 }]).exec();
    episodeQuery.then(function (result) {
        var episodes = (0, _uniqBy2.default)(result, 'anime');
        episodes = episodes.filter(function (episode) {
            return episode.relatedAnime.averageRating > 0;
        });
        episodes = episodes.slice(0, 12);
        res.json(episodes);
    });
};

controller.get = async function (req, res) {
    var anime = await _anime2.default.aggregate([{ $match: { slug: req.query.slug } }, {
        $lookup: {
            from: 'episodes',
            localField: '_id',
            foreignField: 'anime',
            as: 'relatedEpisodes'
        }
    }, {
        $lookup: {
            from: 'genres',
            localField: 'genres',
            foreignField: '_id',
            as: 'relatedGenres'
        }
    }, {
        $addFields: {
            episodeSize: { $size: '$relatedEpisodes' }
        }
    }, { $project: { relatedEpisodes: 0 } }]).exec();

    if (!anime.length) {
        res.status(500).send({ error: 'Something failed!' });
    }

    var episodes = await _episode2.default.find({ anime: anime[0]._id }).sort({ episode: 1 }).limit(24).exec();

    res.json({
        anime: anime[0],
        episodes: episodes
    });
};

controller.getEpisodes = async function (req, res, next) {
    if (req.query.search) {
        var _episodes = await _episode2.default.find({
            anime: req.query.id,
            episode: req.query.search
        }).sort({ episode: 1 }).exec();
        return res.json(_episodes);
    }
    var episodes = await _episode2.default.find({ anime: req.query.id }).sort({ episode: 1 }).skip((req.query.page - 1) * 24).limit(24).exec();
    res.json(episodes);
};

controller.getFeatured = async function (req, res, next) {
    var animes = await _anime2.default.find({ $or: [{ 'kitsuId': 11 }, { 'kitsuId': 12 }] }).populate('relatedGenres').exec();
    res.json(animes);
};

exports.default = controller;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqBy");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _episode = __webpack_require__(2);

var _episode2 = _interopRequireDefault(_episode);

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

var _news = __webpack_require__(9);

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {};
controller.get = async function (req, res) {
    var news = void 0;
    if (req.query.slug) {
        news = await _news2.default.find({ slug: req.query.slug }).exec();
        return res.json(news);
    }
    news = await _news2.default.find({}).sort({ createdAt: -1 }).skip((req.query.page - 1) * 24).limit(24).exec();
    res.json(news);
};

controller.update = function (req, res) {};

exports.default = controller;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _bot_controller = __webpack_require__(32);

var _bot_controller2 = _interopRequireDefault(_bot_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/anime', _bot_controller2.default.anime);
router.get('/episode', _bot_controller2.default.episode);
router.get('/genre', _bot_controller2.default.genre);
router.get('/animegenre', _bot_controller2.default.animegenre);
exports.default = router;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = __webpack_require__(33);

var _fs2 = _interopRequireDefault(_fs);

var _imageDownloader = __webpack_require__(34);

var _imageDownloader2 = _interopRequireDefault(_imageDownloader);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

var _chalk = __webpack_require__(11);

var _chalk2 = _interopRequireDefault(_chalk);

var _anime = __webpack_require__(1);

var _anime2 = _interopRequireDefault(_anime);

var _episode = __webpack_require__(2);

var _episode2 = _interopRequireDefault(_episode);

var _genre = __webpack_require__(10);

var _genre2 = _interopRequireDefault(_genre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = __webpack_require__(35);
var throttledRequest = __webpack_require__(36)(request);
var throttledQueue = __webpack_require__(37);
var throttle = throttledQueue(15, 700);
// This will throttle the requests so no more than 5 are made every second
throttledRequest.configure({
    requests: 5,
    milliseconds: 1500
});

var controller = {};
controller.anime = function (req, res) {
    for (var i = 0; i < 630; i += 1) {
        throttledRequest('https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=' + i * 20, function (error, response, body) {
            if (error) {
                console.log(error);
                return false;
            }
            JSON.parse(body).data.forEach(function (anime) {
                var attributes = anime.attributes;
                var result = {};
                var model = new _anime2.default({
                    canonicalTitle: attributes.canonicalTitle,
                    titles: attributes.titles,
                    kitsuId: anime.id,
                    synopsis: attributes.synopsis,
                    synopsisTr: attributes.synopsis,
                    averageRating: attributes.averageRating,
                    startDate: attributes.startDate ? new Date(attributes.startDate) : null,
                    endDate: attributes.endDate ? new Date(attributes.endDate) : null,
                    ratingRank: attributes.ratingRank,
                    popularityRank: attributes.popularityRank,
                    ageRating: attributes.ageRating,
                    ageRatingGuide: attributes.ageRatingGuide,
                    status: attributes.status,
                    episodeCount: attributes.episodeCount,
                    nsfw: attributes.nsfw,
                    youtubeVideoId: attributes.youtubeVideoId || null,
                    posterImages: {},
                    coverImages: {}
                });
                model.save().then(function (savedAnime) {
                    console.info('ANIME : ' + savedAnime.canonicalTitle + ' has successfully saved');
                });
            });
        });
    }
    res.send();
};
controller.episode = function (req, res) {
    _anime2.default.find().then(function (animes) {
        animes.forEach(function (anime) {
            var _loop = function _loop(k) {
                throttle(function () {
                    var request = _axios2.default.get('https://kitsu.io/api/edge/anime/' + anime.kitsuId + '/episodes?page[limit]=20&page[offset]=' + k * 20);
                    request.then(function (episodes) {
                        var data = episodes.data.data;
                        if (data.length <= 0) {
                            return false;
                        }
                        data.forEach(function (episode) {
                            var attributes = episode.attributes;
                            var model = new _episode2.default({
                                canonicalTitle: attributes.canonicalTitle,
                                seasonNumber: attributes.seasonNumber,
                                episode: attributes.number,
                                relativeNumber: attributes.relativeNumber,
                                synopsis: attributes.synopsis || null,
                                airDate: new Date(attributes.airdate),
                                kitsuReleaseDate: new Date(attributes.createdAt),
                                anime: anime._id
                            });
                            model.save().then(function () {
                                console.info('EPISODE : ' + _chalk2.default.bold.red(anime.canonicalTitle) + ' episode added');
                            });
                        });
                    });
                    request.catch(function (error) {
                        console.log(error);
                        process.exit();
                    });
                });
            };

            for (var k = 0; k < anime.metaCount; k++) {
                _loop(k);
            }
        });
    });
    res.send('bö');
};
controller.genre = function (req, res) {
    request('https://kitsu.io/api/edge/genres?page%5Blimit%5D=900&page%5Boffset%5D=0', function (err, response, body) {
        var resp = JSON.parse(body).data;
        resp.forEach(function (genre) {
            var attribute = genre.attributes;
            var result = {};

            var model = new _genre2.default({
                name: attribute.name,
                slug: attribute.slug,
                description: attribute.description
            });

            model.save(result).then(function (savedGenre) {
                console.info('GENRE: ' + savedGenre.name + ' added to DB');
            });
        });
    });
    res.send();
};
controller.animegenre = function (req, res) {
    _anime2.default.find().then(function (animes) {
        animes.forEach(function (anime) {
            throttle(function () {
                var request = _axios2.default.get('https://kitsu.io/api/edge/anime/' + anime.kitsuId + '/genres');
                request.then(function (genres) {
                    var data = genres.data.data;
                    if (data.length <= 0) {
                        return false;
                    }
                    var genreList = [];
                    data.forEach(function (genre) {
                        genreList.push(genre.attributes.slug);
                    });
                    var foundGenres = _genre2.default.find({ slug: { $in: genreList } }).lean().distinct('_id').exec();
                    foundGenres.then(function (result) {
                        anime.genres = result;
                        anime.save();
                        console.log('GENRE : ' + anime.canonicalTitle + ' added');
                    });
                });
                request.catch(function (error) {
                    console.log(error);
                });
            });
        });
    });
    res.send('asd');
};
controller.media = function (req, res) {
    _anime2.default.find().then(function (animes) {
        animes.forEach(function (anime) {
            throttle(function () {
                var request = _axios2.default.get('https://kitsu.io/api/edge/anime/' + anime.kitsuId + '/genres');
                request.then(function (genres) {
                    var data = genres.data.data;
                    if (data.length <= 0) {
                        return false;
                    }
                    var genreList = [];
                    data.forEach(function (genre) {
                        genreList.push(genre.attributes.slug);
                    });
                    var foundGenres = _genre2.default.find({ slug: { $in: genreList } }).lean().distinct('_id').exec();
                    foundGenres.then(function (result) {
                        anime.genres = result;
                        anime.save();
                        console.log('GENRE : ' + anime.canonicalTitle + ' added');
                    });
                });
                request.catch(function (error) {
                    console.log(error);
                });
            });
        });
    });
    res.send('asd');
};
exports.default = controller;

/*/

const id = savedAnime.id;
                    const posterDir = `${__dirname}/../../public/media/poster_images/${id}/`;
                    const coverDir = `${__dirname}/../../public/media/cover_images/${id}/`;

                    if (!fs.existsSync(posterDir)) {
                        fs.mkdirSync(posterDir);
                    }
                    if (!fs.existsSync(coverDir)) {
                        fs.mkdirSync(coverDir);
                    }


                    // download posters
                    for (let key in attributes.posterImage) {
                        download.image({
                            url: attributes.posterImage[key],
                            dest: `${posterDir + key}.jpg`,
                        }).then((poster) => {
                            const size = poster.filename.split('/').pop().split('.')[0];
                            savedAnime.posterImages[size] = '/media/poster_images/' + savedAnime.id + '/' + size + '.jpg';
                            savedAnime.save();
                        }).catch((error) => {
                            console.log('unable to get an image');
                            console.log(error.message);
                        });
                    }
                    // download covers
                    for (var key in attributes.coverImage) {
                        download.image({
                            url: attributes.coverImage[key],
                            dest: `${coverDir + key}.jpg`,
                        }).then((cover) => {
                            const size = cover.filename.split('/').pop().split('.')[0];
                            savedAnime.coverImages[size] = '/media/cover_images/' + savedAnime.id + '/' + size + '.jpg';
                            savedAnime.save();
                        }).catch((error) => {
                            console.log('unable to get an image');
                            console.log(error.message);
                        });
                    }
                    for (let k = 0; k < 1; k++) {
                        throttledRequest(`https://kitsu.io/api/edge/anime/${savedAnime.kitsuId}/episodes?page[limit]=20&page[offset]=${k * 20}`, (error, response, body) => {
                            JSON.parse(body).data.forEach((episode) => {
                                const attributes = episode.attributes;
                                const result = {};
                                Object.assign(result, {
                                    canonicalTitle: attributes.canonicalTitle,
                                    seasonNumber: attributes.seasonNumber,
                                    episode: attributes.episode,
                                    relativeNumber: attributes.relativeNumber,
                                    synopsis: attributes.synopsis || null,
                                    airdate: new Date(attributes.airdate),
                                    animeId: savedAnime.id,
                                });
                                Episode.save(result).then(() => {
                                    console.info(`EPISODE : ${savedAnime.canonicalTitle} episode added`);
                                });
                            });
                        });
                    }
 */

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("image-downloader");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("throttled-request");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("throttled-queue");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _user_controller = __webpack_require__(39);

var _user_controller2 = _interopRequireDefault(_user_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/register', _user_controller2.default.register);
router.post('/login', _user_controller2.default.login);
router.get('/logout', _user_controller2.default.logout);
exports.default = router;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {};
controller.register = function (req, res, next) {
    req.assert('username', 'Geçersiz kullanıcı adı!').len(3);
    req.assert('email', 'Geçersiz bir email adresi').isEmail();
    req.assert('password', 'Şifreniz en az 4 karakter uzunluğunda olmalı. ').len(4);
    req.assert('passwordConfirm', 'Şifreler uyuşmuyor').equals(req.body.password);
    req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

    var errors = req.validationErrors();

    if (errors) {
        return res.json({ 'error': true, 'errors': errors });
    }
    var user = new _user2.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    var criteria = { $or: [{ username: req.body.username }, { email: req.body.email }] };
    return _user2.default.findOne(criteria, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.json({ error: true, errors: 'Bu hesap daha önce tanımlanmış ( ͡° ͜ʖ ͡°)' });
        }
        user.save(function (err) {
            if (err) {
                return next(err);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                req.session.user = user;
                res.json(user);
            });
        });
    });
};

controller.login = function (req, res, next) {
    req.assert('username', 'Kullanıcı adı veya Email adresi geçersiz').notEmpty();
    req.assert('password', 'Şifre boş bırakılamaz').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        return res.status(401).json({ 'error': true, 'errors': errors });
    }
    _passport2.default.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ 'error': true, 'errors': info });
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            if (req.body.rememberme) {
                req.session.cookie.maxAge = 2629746000;
            }
            req.session.user = user;
            return res.json(user);
        });
    })(req, res, next);
};

controller.logout = function (req, res) {
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
};

exports.default = controller;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _passport = __webpack_require__(5);

var _passport2 = _interopRequireDefault(_passport);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

var _user = __webpack_require__(3);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = __webpack_require__(42).Strategy;
var FacebookStrategy = __webpack_require__(43).Strategy;
var TwitterStrategy = __webpack_require__(44).Strategy;
var GoogleStrategy = __webpack_require__(45).OAuth2Strategy;

_passport2.default.serializeUser(function (user, done) {
    done(null, user.id);
});

_passport2.default.deserializeUser(function (id, done) {
    _user2.default.findById(id, function (err, user) {
        done(err, user);
    });
});

/**
 * Sign in using Email and Password.
 */
_passport2.default.use(new LocalStrategy({ usernameField: 'username' }, function (username, password, done) {
    var criteria = { $or: [{ username: username }, { email: username }] };
    _user2.default.findOne(criteria, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { msg: 'Bilgiler ge\xE7ersiz :(' });
        }
        user.comparePassword(password, function (err, isMatch) {
            if (err) {
                return done(err);
            }
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, { msg: 'Invalid email or password.' });
        });
    });
}));

/*
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { msg: `Email ${email} not found.` });
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, { msg: 'Invalid email or password.' });
        });
    });
}));
*/
/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

/**
 * Sign in with Facebook.
 */
_passport2.default.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['name', 'email', 'link', 'timezone', 'gender'],
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
    if (req.user) {
        _user2.default.findOne({ facebook: profile.id }, function (err, existingUser) {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            } else {
                _user2.default.findById(req.user.id, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken: accessToken });
                    user.meta.name = user.meta.name || profile.name.givenName + ' ' + profile.name.familyName;
                    user.meta.gender = user.meta.gender || profile._json.gender;
                    user.meta.picture = user.meta.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                    user.save(function (err) {
                        req.flash('info', { msg: 'Facebook account has been linked.' });
                        done(err, user);
                    });
                });
            }
        });
    } else {
        _user2.default.findOne({ facebook: profile.id }, function (err, existingUser) {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                return done(null, existingUser);
            }
            _user2.default.findOne({ email: profile._json.email }, function (err, existingEmailUser) {
                if (err) {
                    return done(err);
                }
                if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
                    done(err);
                } else {
                    var user = new _user2.default();
                    user.email = profile._json.email;
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken: accessToken });
                    user.meta.name = profile.name.givenName + ' ' + profile.name.familyName;
                    user.meta.gender = profile._json.gender;
                    user.meta.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                    user.save(function (err) {
                        done(err, user);
                    });
                }
            });
        });
    }
}));

// Sign in with Twitter.

_passport2.default.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
}, function (req, accessToken, tokenSecret, profile, done) {
    if (req.user) {
        _user2.default.findOne({ twitter: profile.id }, function (err, existingUser) {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            } else {
                _user2.default.findById(req.user.id, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    user.twitter = profile.id;
                    user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
                    user.meta.name = user.profile.name || profile.displayName;
                    user.meta.picture = user.profile.picture || profile._json.profile_image_url_https;
                    user.save(function (err) {
                        if (err) {
                            return done(err);
                        }
                        req.flash('info', { msg: 'Twitter account has been linked.' });
                        done(err, user);
                    });
                });
            }
        });
    } else {
        _user2.default.findOne({ twitter: profile.id }, function (err, existingUser) {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                return done(null, existingUser);
            }
            var user = new _user2.default();
            // Twitter will not provide an email address.  Period.
            // But a person’s twitter username is guaranteed to be unique
            // so we can "fake" a twitter email address as follows:
            user.email = profile.username + '@twitter.com';
            user.twitter = profile.id;
            user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
            user.meta.name = profile.displayName;
            user.meta.picture = profile._json.profile_image_url_https;
            user.save(function (err) {
                done(err, user);
            });
        });
    }
}));

/**
 * Sign in with Google.
 */
_passport2.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {
    if (req.user) {
        _user2.default.findOne({ google: profile.id }, function (err, existingUser) {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                done(err);
            } else {
                _user2.default.findById(req.user.id, function (err, user) {
                    if (err) {
                        return done(err);
                    }
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken: accessToken });
                    user.meta.name = user.profile.name || profile.displayName;
                    user.meta.gender = user.profile.gender || profile._json.gender;
                    user.meta.picture = user.profile.picture || profile._json.image.url;
                    user.save(function (err) {
                        req.flash('info', { msg: 'Google account has been linked.' });
                        done(err, user);
                    });
                });
            }
        });
    } else {
        _user2.default.findOne({ google: profile.id }, function (err, existingUser) {
            if (err) {
                return done(err);
            }
            if (existingUser) {
                return done(null, existingUser);
            }
            _user2.default.findOne({ email: profile.emails[0].value }, function (err, existingEmailUser) {
                if (err) {
                    return done(err);
                }
                if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
                    done(err);
                } else {
                    var user = new _user2.default();
                    user.email = profile.emails[0].value;
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken: accessToken });
                    user.meta.name = profile.displayName;
                    user.meta.gender = profile._json.gender;
                    user.meta.picture = profile._json.image.url;
                    user.save(function (err) {
                        done(err, user);
                    });
                }
            });
        });
    }
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = function (req, res, next) {
    var provider = req.path.split('/').slice(-1)[0];
    var token = req.user.tokens.find(function (token) {
        return token.kind === provider;
    });
    if (token) {
        next();
    } else {
        res.redirect('/auth/' + provider);
    }
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("passport-twitter");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(47);
module.exports = {
    head: {
        title: 'AnizmTV DEV',
        meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }, { name: 'theme-color', content: "#191919" }],
        link: [],
        script: [{ src: 'https://use.fontawesome.com/1a9887d093.js' }]
    },
    srcDir: 'view/',
    css: ['@/assets/css/framework.scss'],
    plugins: ['@/plugins/svg', '@/plugins/validate', { src: '~/plugins/anime', ssr: false }],
    modules: ['@nuxtjs/axios'],
    axios: {
        credentials: true
    },
    router: {
        //middleware: ['ssr-cookie'],
        extendRoutes: function extendRoutes(routes, resolve) {
            routes.push({
                name: 'anime-episodes',
                path: '/anime/:anime/bolum-:episode-izle',
                component: resolve(__dirname, 'view/pages/anime/episode/index.vue')
            });
        }
    },
    build: {
        filenames: {
            css: 'anizmcore.[contenthash].css',
            manifest: 'manifest.[hash].js',
            vendor: 'anizmcore.[chunkhash].js',
            app: 'anizmapp.[chunkhash].js',
            chunk: '[name].[chunkhash].js'
        },
        extractCSS: true,
        vendor: ['axios', 'moment'],
        postcss: {
            plugins: {
                'postcss-cssnext': {
                    zindex: false
                }
            }
        },
        extend: function extend(config, _ref) {
            var dev = _ref.dev,
                isClient = _ref.isClient;

            /**
             * Initialise SVG Sprites
             */

            // get and remove file loader
            var rule = config.module.rules.find(function (r) {
                return r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/';
            });
            config.module.rules.splice(config.module.rules.indexOf(rule), 1);

            // add it again, but now without 'assets\/svg'
            config.module.rules.push({
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                exclude: path.resolve(__dirname, 'view/assets/svg'),
                query: {
                    limit: 1000, // 1KO
                    name: 'img/[name].[hash:7].[ext]'
                }
            });

            config.module.rules.push({
                test: /\.svg$/,
                include: [path.resolve(__dirname, 'view/assets/svg')],
                loader: 'svg-sprite-loader?' + JSON.stringify({
                    name: '[name]',
                    prefixize: false
                })
            });
            config.output.jsonpFunction = 'anizmJsonp';
        }
    },
    render: {
        bundleRenderer: {
            shouldPreload: function shouldPreload(file, type) {
                return ['script', 'style', 'font'].includes(type);
            }
        },
        http2: {
            push: true
        },
        gzip: {
            treshold: 1
        }
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map