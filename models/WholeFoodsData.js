const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WholeFoodsData extends Model {}

WholeFoodsData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    store: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salesWeek: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    salesWeek2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    salesWeek3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    salesWeek4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sales12W: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sales52W: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wholeFoodsData',
  }
);

module.exports = WholeFoodsData;
