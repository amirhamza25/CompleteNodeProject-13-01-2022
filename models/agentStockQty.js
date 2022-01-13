module.exports = (sequelize, DataTypes) => {
    const agentStockQty = sequelize.define("agentStockQty", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: "0",
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 qty"
                }
            }
        },
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    agentStockQty.associate = (models) => {
        agentStockQty.belongsTo(models.product, {
            foreignKey: 'productId',
        });
        agentStockQty.belongsTo(models.agent, {
            foreignKey: 'userId',
        });
    }
    return agentStockQty;
};