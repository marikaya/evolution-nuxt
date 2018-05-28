export default (sequelize, DataTypes) => {
    const Entry = sequelize.define('Entry', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: DataTypes.TEXT,
        createdDate: DataTypes.DATE,
        status: {
            type: DataTypes.ENUM,
            values: ['active', 'hidden'],
            defaultValue: 'active'
        }
    });

    Entry.associate = ((models)=> {
        Entry.belongsTo(models.User, {as: 'Users', foreignKey: 'userId'});
    });


    return Entry;
};