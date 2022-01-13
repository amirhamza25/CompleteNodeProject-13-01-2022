module.exports = (sequelize, DataTypes) => {
    const agentOrderDetails = sequelize.define("agentOrderDetails", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        invoiceNumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        agentId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        totalProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 product"
                }
            }
        },
        totalQty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 qty"
                }
            }
        },
        totalPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        orderType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['order', 'return']
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['pending', 'process', 'success', 'cancel']
        },
        approveDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: DataTypes.NOW
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    agentOrderDetails.associate = (models) => {
        agentOrderDetails.belongsToMany(models.agent, {
            through: 'rel_agent_balance_orderdetails',
            foreignKey: 'id',
        });
    }

    return agentOrderDetails;
};