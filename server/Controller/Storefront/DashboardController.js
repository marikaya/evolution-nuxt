const AnimeRepository = require('../../repositories/AnimeRepository')
const ArticleRepository = require('../../repositories/ArticleRepository')

module.exports = {
    getDashboardData: async (req, res) => {
        const limit = req.body.limit || 5
        const result = {
            episodes: await AnimeRepository.getLatest(),
            articles: await ArticleRepository.getMastHeaderCollection(limit)
        };
        res.json(result)
    },
}