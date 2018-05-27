const Anime = require('../models').Anime

const controller = {};
controller.getLatest = function (req, res) {
    const episodeQuery = Episode.aggregate([
        {$sort: {kitsuReleaseDate: -1}},
        {
            $lookup: {
                from: 'animes',
                localField: 'anime',
                foreignField: '_id',
                as: 'relatedAnime',
            }
        },
        {$unwind: '$relatedAnime'},
        {$limit: 300},
    ]).exec();
    episodeQuery.then((result) => {
        let episodes = uniqBy(result, 'anime');
        episodes = episodes.filter((episode) => {
            return episode.relatedAnime.averageRating > 0
        });
        episodes = episodes.slice(0, 12);
        res.json(episodes);
    });
};

controller.get = async (req, res) => {
    const anime = await Anime.aggregate([
        {$match: {slug: req.query.slug}},
        {
            $lookup: {
                from: 'episodes',
                localField: '_id',
                foreignField: 'anime',
                as: 'relatedEpisodes',
            },
        },
        {
            $lookup: {
                from: 'genres',
                localField: 'genres',
                foreignField: '_id',
                as: 'relatedGenres',
            },
        },
        {
            $addFields: {
                episodeSize: {$size: '$relatedEpisodes'},
            },
        },
        {$project: {relatedEpisodes: 0}},
    ]).exec();

    if (!anime.length) {
        res.status(500).send({error: 'Something failed!'});
    }

    const episodes = await Episode.find({anime: anime[0]._id}).sort({episode: 1}).limit(24).exec();

    res.json({
        anime: anime[0],
        episodes: episodes,
    });
};

controller.getEpisodes = async (req, res, next) => {
    if (req.query.search) {
        const episodes = await Episode.find({
            anime: req.query.id,
            episode: req.query.search,
        }).sort({episode: 1}).exec();
        return res.json(episodes);
    }
    const episodes = await Episode.find({anime: req.query.id}).sort({episode: 1}).skip((req.query.page - 1) * 24).limit(24).exec();
    res.json(episodes);
};


controller.create = async (req,res) => {

}
controller.read = async(req,res) => {

}
controller.update = async(req,res) => {

}
controller.delete = async(req,res) => {

}
controller.show = async(req,res) => {
    if(!req.body.id){
        res.json({
            error: 'Bulunamadı'
        })
    }
    return await Anime.findById(req.body.id)
}

export default controller;
