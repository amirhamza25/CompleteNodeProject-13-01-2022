module.exports = (sequelize, DataTypes) => {
    const relAgentBalanceOrderOrderdetails = sequelize.define("rel_agent_balance_orderdetails", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        agentId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        invoiceNumber: {
            type: DataTypes.INTEGER,
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

    return relAgentBalanceOrderOrderdetails;
};