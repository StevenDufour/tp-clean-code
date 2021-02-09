module.exports = function (sequelize, DataTypes) {
    const Book =  sequelize.define('Book', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    return Book;
}
