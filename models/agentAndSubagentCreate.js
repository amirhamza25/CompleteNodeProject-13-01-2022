module.exports = (sequelize, DataTypes) => {
    const agent = sequelize.define("agent", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        agenrType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Agent', 'SubAgent', 'Vendor']
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER(15),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        presentAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        permanentAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        division: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        district: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        upazila: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        officeAddress: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        nidNumber: {
            type: DataTypes.INTEGER(50),
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        commission: {
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

    agent.associate = (models) => {
        agent.hasOne(models.agentBalance, {
            foreignKey: 'id',
        });
        agent.belongsToMany(models.orderDetails, {
            through: 'rel_order_details_user_agent_vendor',
            foreignKey: 'agentId',
        });
        agent.belongsToMany(models.agentOrderDetails, {
            through: 'rel_agent_balance_orderdetails',
            foreignKey: 'agentId',
        });
        agent.hasMany(models.agentStockQty, {
            foreignKey: 'userId',
        });
        agent.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'userId',
        });



        // agent.belongsToMany(models.agentOrder, {
        //     through: 'rel_cat_subcat_brand_product',
        //     foreignKey: 'agentId',
        // });
    }

    return agent;
};