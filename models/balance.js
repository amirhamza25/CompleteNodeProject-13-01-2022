module.exports = (sequelize, DataTypes) => {
    const balance = sequelize.define("balance", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        totalInAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        totalOutAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        balance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    return balance;
};