module.exports = (sequelize, DataTypes) => {
    const member = sequelize.define("member", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        userLog: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountType: {
            type: DataTypes.STRING,
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

    }, {
        timestamps: false,
        freezeTableName: true
    });

    member.associate = (models) => {
        member.belongsToMany(models.orderDetails, {
            as: 'groups',
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'userId',
        });
        member.belongsToMany(models.order, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'userId',
        });
    }

    return member;
};