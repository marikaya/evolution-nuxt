const SequelizeSlugify = require('sequelize-slugify')

module.exports = function(sequelize, DataTypes) {
    const Episode = sequelize.define('Episode', {
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
        averageRating: DataTypes.DOUBLE,
        synopsis: DataTypes.TEXT,
        seasonNumber: DataTypes.INTEGER,
        episode: DataTypes.INTEGER,
        relativeNumber: DataTypes.INTEGER,
        airDate: DataTypes.DATE,
        kitsuReleaseDate: DataTypes.DATE
    });

    Episode.associate = function(models) {
        Episode.belongsTo(models.Anime);
    };

    SequelizeSlugify.slugifyModel(Episode, {
        source: ['canonicalTitle']
    });

    return Episode;
};
