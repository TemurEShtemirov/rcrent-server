import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Car = sequelize.define(
  "Cars",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    title_car: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_car: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gear_box: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    volume_engine: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    petrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    one_two_days: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
    },
    three_six_days: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
    },
    from_seven_days: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
    },
    pledge: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
    },
    isRent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    car_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "cars",
  }
);

export default Car;
