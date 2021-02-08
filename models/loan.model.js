module.exports = function (sequelize, DataTypes) {
    const Loan = sequelize.define('Loan', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        isReturned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    return Loan;
}
