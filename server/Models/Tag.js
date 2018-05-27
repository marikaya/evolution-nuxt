module.exports = function (sequelize, DataTypes) {
    const Tag = sequelize.define('Tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    Tag.associate = function (models) {
        Tag.belongsToMany(models.Tag, {as: 'Articles', through: 'ArticleTags', foreignKey: 'tagId'})
    };


    return Tag;
};
