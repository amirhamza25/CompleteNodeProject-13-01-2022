module.exports = (sequelize, DataTypes) => {
    const productStockQtyRecord = sequelize.define("productStockQtyRecord", {
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

    productStockQtyRecord.associate = (models) => {
        productStockQtyRecord.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });
    }
    return productStockQtyRecord;
};