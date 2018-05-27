module.exports = function(sequelize, DataTypes) {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
    });

    Role.associate = function(models) {
        Role.belongsToMany(models.User, { as: 'Users', through: 'UserRoles', foreignKey: 'roleId' });
    };

    return Role;
};
