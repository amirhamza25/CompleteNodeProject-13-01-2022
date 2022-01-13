module.exports = (sequelize, DataTypes) => {
    const categorySub = sequelize.define("categorySub", {
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
        title: {
            type: DataTypes.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your sub category name"
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
    }, {
        timestamps: false,
        freezeTableName: true
    });

    categorySub.associate = (models) => {
        categorySub.hasMany(models.categoryBrand, {
            foreignKey: 'categorySubId',
        });
        categorySub.belongsTo(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'categorySubId',
        });
    }


    return categorySub;
};