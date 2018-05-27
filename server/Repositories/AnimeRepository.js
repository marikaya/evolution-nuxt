import {Episode, Anime} from '../bootstrap/Database'

const Op = require('sequelize').Op

module.exports = {
    getLatest: async () => {
        return await Episode.find({
            where: {'averageRating': {[Op.gt]: 0}},
            include: ['Anime'],
            limit: 12,
            group: ['id', 'AnimeId'],
            order: [['kitsuReleaseDate', 'DESC']],
        })
    },
    getFeatured: async () => {
        return await Anime.find({
            include: ['Genres'],
            where: {featured: 1}
        })
    },
    getBySlug: async (slug) => {
        return await Anime.find({include: ['Animes', 'Genres'], where: {slug: slug}})
    },
    getById: async (id) => {
        return await Anime.findOne({include: ['Animes', 'Genres'], where: {id: id}})
    },
    getEpisodesBySearch: async (search, animeSlug) => {
        return await Episode.find({
            where: {
                slug: animeSlug,
                episode: search
            },
            order: ['episode', 'DESC']
        })
    }
}
