module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
       id: {
           type: DataTypes.BIGINT,
           primaryKey: true,
           autoIncrement: true,
       },
        firstname: {
           type: DataTypes.STRING
        },
        lastname: {
           type: DataTypes.STRING
        },
        login: {
           type: DataTypes.STRING
        },
        type: {
           type: DataTypes.STRING,
            defaultValue: "Membre"
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    return User;
}
