const AnimeRepository = require('../../repositories/AnimeRepository')

module.exports = {
    show: async (req, res) => {
        const {id, slug} = req.body
        let result = {}

        if (!id || !slug) {
            res.json({
                error: 'Bulunamadı'
            })
        }

        if (slug) {
            result = await AnimeRepository.getBySlug(slug)
            return res.json(result)
        }
        result = await AnimeRepository.getById(id)
        return res.json(result)
    },
    search: async (req, res) => {
        const {search, slug} = req.body

        if (!search && !slug) {
            return res.json({
                error: 'Bulunamadı'
            })
        }

        const result = await AnimeRepository.getEpisodesBySearch(search, slug)
        return res.json(result)
    },
}
