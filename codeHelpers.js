// modal create
title: {
  type: DataTypes.STRING(50),
    type: DataTypes.INTEGER,
      type: DataTypes.DOUBLE(11, 10),
        type: DataTypes.TEXT('LONGTEXT'),
          type: DataTypes.ENUM,
            values: ['Admin', 'Agent', 'SubAgent', 'Vendor', 'SubVendor']
  allowNull: false,
    unique: true,
      defaultValue: "1",
        validate: {
    notEmpty: {
      args: true,
        msg: "Please enter your title"
    }
  }
  //   set: function(val) {
  //     val = val.toLowerCase().trim();
  //     this.setDataValue('title', val );
  //     this.setDataValue('slug', val.split(" ").join("_"));
  // }
}, {
  timestamps: false,
    freezeTableName: true
}

// one to many relation
const listOfCategory = await Category.findAll({
  where: { id: 1 },
  order: [['id', 'DESC']],
  attributes: ['id', 'title'],
  include: [{
    model: CategorySub,
    attributes: ['id', 'categoryId', 'title'],
    include: [{
      model: CategoryBrand,
      attributes: ['id', 'categoryId', 'categorySubId', 'title']
    }]
  }]
});
res.json({ listOfCategory: listOfCategory });

Category.associate = (models) => {
  Category.hasMany(models.CategorySub, {
    onDelete: "cascade",
  });
}

CategorySub.associate = (models) => {
  CategorySub.hasMany(models.CategoryBrand, {
    onDelete: "cascade",
  });
}



// Row select query
const count = await sequelize.query("select * from Category", { type: sequelize.QueryTypes.SELECT })
  .then(projects => {
    console.log(projects)
    res.status(200).json({ data: projects });
  })
// Row update query 
const { tableName, columnName, idColumnName, idValue, updateValue } = req.body;
const updateInfo = await sequelize.query("UPDATE " + tableName + " SET " + columnName + " = '" + updateValue + "' WHERE " + idColumnName + " = " + idValue + "")
  .then(([results, metadata]) => {
    res.status(200).json({ error: [{ result: 'success', msg: `Your update successfully` }] });
  })
// Delete information
const deleteInfo = await sequelize.query("DELETE FROM " + tableName + " WHERE " + idColumnName + " = " + idValue + "")
  .then(([results, metadata]) => {
    res.status(200).json({ error: [{ result: 'success', msg: `Your information delete successfully` }] });
  })


const { Op } = require("sequelize");
Post.findAll({
  where: {
    [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],             // (a = 5) OR (b = 6)
    someAttribute: {
      // Basics
      [Op.eq]: 3,                              // = 3
      [Op.ne]: 20,                             // != 20
      [Op.is]: null,                           // IS NULL
      [Op.not]: true,                          // IS NOT TRUE
      [Op.or]: [5, 6],                         // (someAttribute = 5) OR (someAttribute = 6)

      // Using dialect specific column identifiers (PG in the following example):
      [Op.col]: 'user.organization_id',        // = "user"."organization_id"

      // Number comparisons
      [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

      // Other operators

      [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

      [Op.in]: [1, 2],                         // IN [1, 2]
      [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

      [Op.like]: '%hat',                       // LIKE '%hat'
      [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
      [Op.startsWith]: 'hat',                  // LIKE 'hat%'
      [Op.endsWith]: 'hat',                    // LIKE '%hat'
      [Op.substring]: 'hat',                   // LIKE '%hat%'
      [Op.iLike]: '%hat',                      // ILIKE '%hat' (case insensitive) (PG only)
      [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (PG only)
      [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
      [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
      [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (PG only)
      [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (PG only)

      [Op.any]: [2, 3],                        // ANY ARRAY[2, 3]::INTEGER (PG only)

      // In Postgres, Op.like/Op.iLike/Op.notLike can be combined to Op.any:
      [Op.like]: { [Op.any]: ['cat', 'hat'] }  // LIKE ANY ARRAY['cat', 'hat']

      // There are more postgres-only range operators, see below
    }
  }
});

[Op.and]: [{ a: 5 }, { b: 6 }] // (a = 5) AND (b = 6)
[Op.or]: [{ a: 5 }, { a: 6 }]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // > 6
  [Op.gte]: 6,               // >= 6
    [Op.lt]: 10,               // < 10
      [Op.lte]: 10,              // <= 10
        [Op.ne]: 20,               // != 20
          [Op.eq]: 3,                // = 3
            [Op.is]: null              // IS NULL
            [Op.not]: true,            // IS NOT TRUE
              [Op.between]: [6, 10],     // BETWEEN 6 AND 10
                [Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
                  [Op.in]: [1, 2],           // IN [1, 2]
                    [Op.notIn]: [1, 2],        // NOT IN [1, 2]
                      [Op.like]: '%hat',         // LIKE '%hat'
                        [Op.notLike]: '%hat'       // NOT LIKE '%hat'
                        [Op.iLike]: '%hat'         // ILIKE '%hat' (case insensitive) (PG only)
                        [Op.notILike]: '%hat'      // NOT ILIKE '%hat'  (PG only)
                        [Op.startsWith]: 'hat'     // LIKE 'hat%'
                        [Op.endsWith]: 'hat'       // LIKE '%hat'
                        [Op.substring]: 'hat'      // LIKE '%hat%'
                        [Op.regexp]: '^[h|a|t]'    // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
                        [Op.notRegexp]: '^[h|a|t]' // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
                        [Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (PG only)
                        [Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (PG only)
                        [Op.like]: { [Op.any]: ['cat', 'hat'] }
// LIKE ANY ARRAY['cat', 'hat'] - also works for iLike and notLike
[Op.overlap]: [1, 2]       // && [1, 2] (PG array overlap operator)
[Op.contains]: [1, 2]      // @> [1, 2] (PG array contains operator)
[Op.contained]: [1, 2]     // <@ [1, 2] (PG array contained by operator)
[Op.any]: [2, 3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

[Op.col]: 'user.organization_id' // = "user"."organization_id", with dialect specific column identifiers, PG in this example
[Op.gt]: { [Op.all]: literal('SELECT 1') }
// > ALL (SELECT 1)





// value update 1 increment and -1 decrement
increment
decrement


const getOrderInfo = await cart.findAll({ attributes: ['ip', 'price', [sequelize.fn('sum', sequelize.col('qty')), 'qtyTotal'], [sequelize.fn('sum', sequelize.col('price')), 'priceTotal']], group: ['ip', 'price'], where: { ip: ip } })

sequelize.define('foo', {
  bar: {
    type: DataTypes.STRING,
    validate: {
      is: /^[a-z]+$/i,          // matches this RegExp
      is: ["^[a-z]+$", 'i'],     // same as above, but constructing the RegExp from a string
      not: /^[a-z]+$/i,         // does not match this RegExp
      not: ["^[a-z]+$", 'i'],    // same as above, but constructing the RegExp from a string
      isEmail: true,            // checks for email format (foo@bar.com)
      isUrl: true,              // checks for url format (http://foo.com)
      isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
      isIPv4: true,             // checks for IPv4 (129.89.23.1)
      isIPv6: true,             // checks for IPv6 format
      isAlpha: true,            // will only allow letters
      isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
      isNumeric: true,          // will only allow numbers
      isInt: true,              // checks for valid integers
      isFloat: true,            // checks for valid floating point numbers
      isDecimal: true,          // checks for any numbers
      isLowercase: true,        // checks for lowercase
      isUppercase: true,        // checks for uppercase
      notNull: true,            // won't allow null
      isNull: true,             // only allows null
      notEmpty: true,           // don't allow empty strings
      equals: 'specific value', // only allow a specific value
      contains: 'foo',          // force specific substrings
      notIn: [['foo', 'bar']],  // check the value is not one of these
      isIn: [['foo', 'bar']],   // check the value is one of these
      notContains: 'bar',       // don't allow specific substrings
      len: [2, 10],              // only allow values with length between 2 and 10
      isUUID: 4,                // only allow uuids
      isDate: true,             // only allow date strings
      isAfter: "2011-11-05",    // only allow date strings after a specific date
      isBefore: "2011-11-05",   // only allow date strings before a specific date
      max: 23,                  // only allow values <= 23
      min: 23,                  // only allow values >= 23
      isCreditCard: true,       // check for valid credit card numbers

      // Examples of custom validators:
      isEven(value) {
        if (parseInt(value) % 2 !== 0) {
          throw new Error('Only even values are allowed!');
        }
      }
      isGreaterThanOtherField(value) {
        if (parseInt(value) <= parseInt(this.otherField)) {
          throw new Error('Bar must be greater than otherField.');
        }
      }
    }
  }
});


// relation 
orderDetails.associate = (models) => {
  orderDetails.belongsToMany(models.member, {
    as: 'groups',
    through: 'rel_order_order_details_user_agent_vendor',
    foreignKey: 'orderDetailsId',
  });
}