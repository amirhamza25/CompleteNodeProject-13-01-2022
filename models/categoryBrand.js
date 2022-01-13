module.exports = (sequelize, DataTypes) => {
    const categoryBrand = sequelize.define("categoryBrand", {
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Select category"
                }
            }
        },
        categorySubId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Select sub category"
                }
            }
        },
        title: {
            type: DataTypes.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your brand name"
                }
            }
        },
        mobileicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        desktopicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        })

    categoryBrand.associate = (models) => {
        categoryBrand.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'categoryBrandId',
        });
        categoryBrand.belongsTo(models.category, {
            foreignKey: 'id',
        });
        categoryBrand.belongsTo(models.categorySub, {
            foreignKey: 'id',
        });
    }

    return categoryBrand;
};