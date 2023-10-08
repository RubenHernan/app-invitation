'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Result.init({
    accepted: DataTypes.BOOLEAN,
    guests: DataTypes.INTEGER,
    namesGuests: DataTypes.TEXT,
    dietaryReq: DataTypes.TEXT,
    contactName: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    contactEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};