const express = require('express')
const router = express.Router()

const BotController = require('../controller/BotController')

router.get('/anime', BotController.anime);
router.get('/episode', BotController.episode);
router.get('/genre', BotController.genre);
router.get('/animegenre', BotController.animegenre);
export default router;
