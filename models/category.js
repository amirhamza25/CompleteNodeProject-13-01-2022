module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("category", {
        title: {
            type: DataTypes.STRING(50),
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your title"
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
        });

    category.associate = (models) => {
        category.hasMany(models.categorySub, {
            foreignKey: 'categoryId',
        });
        category.hasMany(models.categoryBrand, {
            foreignKey: 'categoryId',
        });
        category.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'categoryId',
        });
    }




    return category;
};