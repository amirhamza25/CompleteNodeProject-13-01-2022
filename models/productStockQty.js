module.exports = (sequelize, DataTypes) => {
    const productStockQty = sequelize.define("productStockQty", {
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

    productStockQty.associate = (models) => {
        productStockQty.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });
    }

    return productStockQty;
};