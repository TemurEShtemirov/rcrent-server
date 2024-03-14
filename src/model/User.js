import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const User = sequelize.define("User", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_receiving: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  return_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  receipt_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  return_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  pickup_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  return_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
