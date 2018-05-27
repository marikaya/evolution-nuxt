const SequelizeSlugify = require('sequelize-slugify')

module.exports = function(sequelize, DataTypes) {
    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
    });

    Genre.associate = function(models) {
        Genre.belongsToMany(models.Anime, { as: 'Animes', through: 'AnimeGenre', foreignKey: 'genreId' });
    };

    SequelizeSlugify.slugifyModel(Genre, {
        source: ['name']
    });

    return Genre;
};
