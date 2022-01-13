module.exports = (sequelize, DataTypes) => {
    const addSliderAndAds = sequelize.define("addSliderAndAds", {
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shortDiscription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Slider', 'Offer', 'Ads']
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

    return addSliderAndAds;
};