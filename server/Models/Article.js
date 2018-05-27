const SequelizeSlugify = require('sequelize-slugify')

module.exports = function (sequelize, DataTypes) {
    const Article = sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        canonicalTitle: DataTypes.STRING,
        slug: {
            type: DataTypes.STRING,
            unique: true
        },
        featuredImage: DataTypes.STRING,
        shortContent: DataTypes.TEXT,
        content: DataTypes.TEXT,
        status: DataTypes.TINYINT(1),
        view: DataTypes.INTEGER,
        featured: DataTypes.TINYINT(1),
    });

    Article.associate = function (models) {
        Article.belongsToMany(models.Tag, {as: 'Tags', through: 'ArticleTags', foreignKey: 'articleId'})
        Article.belongsTo(models.User, {as: 'Author'})
        Article.hasMany(models.Comment, {as: 'Comments'})
    };

    SequelizeSlugify.slugifyModel(Article, {
        source: ['canonicalTitle']
    });

    return Article;
};
