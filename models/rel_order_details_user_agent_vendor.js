module.exports = (sequelize, DataTypes) => {
    const relOrderOrderDetailsUserAgentVendor = sequelize.define("rel_order_details_user_agent_vendor", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        invoiceNumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        orderDetailsId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        agentId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        vendorId: {
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

    return relOrderOrderDetailsUserAgentVendor;
};