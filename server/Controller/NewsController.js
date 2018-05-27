import Episode from '../models/episode';
import Anime from '../models/anime';
import Article from '../models/article';

const controller = {};
controller.get = async function (req, res) {
    let news;
    if(req.query.slug){
        news = await Article.find({slug: req.query.slug}).exec();
        return res.json(news);
    }
    news = await Article.find({}).sort({createdAt: -1}).skip((req.query.page - 1) * 24).limit(24).exec();
    res.json(news);
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

}
export default controller;
