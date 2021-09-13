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
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salesWeek: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salesWeek2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salesWeek3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salesWeek4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sales12W: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sales52W: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
