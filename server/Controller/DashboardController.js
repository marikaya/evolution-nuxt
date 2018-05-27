import Episode from "../models/episode";
import Article from "../models/article";
import Anime from "../models/anime";
import uniqBy from "lodash/uniqBy";

const controller = {};
controller.getDashboard = async (req, res) => {
  let result = {
    episodes: await getLatestEpisodes(),
    articles: await Article.find({}).sort({createdAt : -1}).limit(4).populate('relatedAuthor'),
    featuredArticle: await Article.getFeatured().exec()
  };
  res.json(result);
};

controller.getFeatured = async (req, res, next) => {
  const animes = await Anime.find({ $or: [{ kitsuId: 11 }, { kitsuId: 12 }] })
    .populate("relatedGenres")
    .exec();
  res.json(animes);
};

const getLatestEpisodes = async () => {
  return await Episode.aggregate([
    { $sort: { kitsuReleaseDate: -1 } },
    {
      $lookup: {
        from: "animes",
        localField: "anime",
        foreignField: "_id",
        as: "relatedAnime"
      }
    },
    { $unwind: "$relatedAnime" },
    { $limit: 300 }
  ])
    .exec()
    .then(result => {
      return uniqBy(result, "anime")
        .filter(episode => {
          return episode.relatedAnime.averageRating > 0;
        })
        .slice(0, 12);
    });
};

export default controller;
