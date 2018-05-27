const SequelizeSlugify = require('sequelize-slugify')

module.exports = function (sequelize, DataTypes) {
    const Anime = sequelize.define('Anime', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        canonicalTitle: DataTypes.STRING,
        titles: DataTypes.JSON,
        kitsuId: DataTypes.BIGINT(11),
        synopsis: DataTypes.TEXT,
        averageRating: DataTypes.DOUBLE,
        status: DataTypes.STRING,
        popularityRank: DataTypes.INTEGER(5),
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        youtubeVideoId: DataTypes.STRING,
        metaCount: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    Anime.associate = function (models) {
        Anime.belongsToMany(models.Genre, {as: 'Genres', through: 'AnimeGenre', foreignKey: 'animeId'});
        Anime.hasMany(models.Episode, {as: 'Episodes'});
    };

    SequelizeSlugify.slugifyModel(Anime, {
        source: ['canonicalTitle']
    });

    return Anime;
};
