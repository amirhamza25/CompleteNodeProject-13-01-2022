module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brandCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        realPrice: {
            type: DataTypes.DOUBLE(22, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "You do not set product real price"
                }
            }
        },
        buyPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "You do not set product buy price"
                }
            }
        },
        agentCommission: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        img: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        shortDescription: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        fullDescription: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        productOwner: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Admin', 'Agent', 'SubAgent', 'Vendor']
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Offer', 'FlashSales', 'Reguler']
        },
        productType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Reguler', 'Package']
        },
        offerAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        discountAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        cashBackAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        productDeliveryCharge: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
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

    product.associate = (models) => {
        product.belongsToMany(models.category, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });
        product.belongsToMany(models.categorySub, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });
        product.belongsToMany(models.categoryBrand, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });
        product.belongsToMany(models.agent, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });

        product.belongsToMany(models.productStockQty, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'productId',
        });
        product.hasMany(models.agentStockQty, {
            foreignKey: 'productId',
        });

    }

    return product;
};