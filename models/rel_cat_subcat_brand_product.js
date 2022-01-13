module.exports = (sequelize, DataTypes) => {
    const relCatSubcatBrandProduct = sequelize.define("rel_cat_subcat_brand_product", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categorySubId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryBrandId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
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

    return relCatSubcatBrandProduct;
};