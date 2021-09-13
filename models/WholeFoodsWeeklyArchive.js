const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WholeFoodsWeeklyArchive extends Model {}

WholeFoodsWeeklyArchive.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upc: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    sku_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    net_sales: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    unit_sales: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    week_ending: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wholeFoodsWeeklyArchive',
  }
);

module.exports = WholeFoodsWeeklyArchive;
