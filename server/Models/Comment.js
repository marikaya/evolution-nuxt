module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        body: DataTypes.TEXT,
    });

    Comment.associate = function (models) {
        Comment.belongsTo(models.User)
        Comment.belongsTo(models.Comment)
        Comment.hasMany(models.Comment)
        Comment.belongsToMany(models.Article, {as: 'Article', through: 'ArticleComments', foreignKey: 'commentId'})
        Comment.belongsToMany(models.Anime, {as: 'Anime', through: 'AnimeComments', foreignKey: 'commentId'})
        Comment.belongsToMany(models.Episode, {as: 'Episode', through: 'EpisodeComments', foreignKey: 'commentId'})
    };


    return Comment;
};
