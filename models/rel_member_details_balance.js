module.exports = (sequelize, DataTypes) => {
    const relMemberDetailsBalance = sequelize.define("rel_member_details_balance", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    return relMemberDetailsBalance;
};