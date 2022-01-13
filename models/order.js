module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    invoiceNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Must be order 1 qty"
        }
      }
    },
    price: {
      type: DataTypes.DOUBLE(20, 2),
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Your balance is too low"
        }
      }
    },
    orderType: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['order', 'return']
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


  order.associate = (models) => {
    order.belongsToMany(models.member, {
      through: 'rel_cat_subcat_brand_product',
      foreignKey: 'invoiceNumber',
    });
  }

  return order;
};