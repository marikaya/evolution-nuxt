const express = require('express')
const router = express.Router()

const UserController = require('../controller/Storefront/AuthController')
const AnimeController = require('../controller/Storefront/AnimeController')
const DashboardController = require('../controller/Storefront/DashboardController')


//Auth Controller
router.get('/user/logout', UserController.logout)
router.post('/user/register', UserController.register)
router.post('/user/login', UserController.login)

//Anime Controller
router.get('/anime/show', AnimeController.show)

//Dashboard Controller
router.get('/dashboard', DashboardController.getDashboardData)

module.exports = router
