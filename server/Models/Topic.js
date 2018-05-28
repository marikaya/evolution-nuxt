export default (sequelize, DataTypes) => {
    const Topic = sequelize.define('Topic', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        slug: DataTypes.STRING,
        createdDate: DataTypes.DATE
    });

    Topic.associate = (models) => {
        Topic.belongsTo(models.User, {as: 'Users', foreignKey: 'userId'});
    };

    return Topic;
};