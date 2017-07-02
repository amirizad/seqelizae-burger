module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger",{
    burger_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: [2,140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false 
    },
    customer: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: '...',
      validate: {
        len: [1,140]
      }
    } 
  });
  return Burger;
};