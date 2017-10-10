module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        burger_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        createdAt: DataTypes.DATE,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        burger_time: DataTypes.DATE
    });
    return Burger;
}