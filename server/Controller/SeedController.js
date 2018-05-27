import faker from 'faker';
import Article from '../models/article';
import Tag from '../models/tag';

const controller = {};

controller.news = (req, res) => {
    let news = [];
    for (let i = 0; i < 50; i++) {
        Tag.count().exec(function (err, count) {
            var random = Math.floor(Math.random() * count);
            Tag.findOne().skip(random).exec(
                function (err, result) {
                    news.push({
                        canonicalTitle: faker.company.catchPhrase(),
                        featuredImage: faker.image.imageUrl(800, 380),
                        shortContent: faker.lorem.sentence(8, 5),
                        content: faker.lorem.paragraphs(18, ["\n \r"]),
                        status: 1,
                        view: faker.random.number(9999),
                        featured: 0,
                        tags: result._id,
                        author: '59d55804def4700b0caf1c65'
                    });
                });
        });
    }

    Article.create(news).then((fulFilled) => {
        res.send(fulFilled);
    });
};

controller.tags = (req, res) => {
    let tags = [];
    for (let i = 0; i < 20; i++) {
        tags.push({
            name: faker.hacker.noun(),
            description: faker.company.catchPhrase()
        });
    }

    Tag.create(tags).then(fulFilled => {
        res.send(fulFilled);
    });
};

export default controller;