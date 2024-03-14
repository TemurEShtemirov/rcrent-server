import { Sequelize } from "sequelize";

const db_name = process.env.DBNAME || "rmpbivrj";
const password = process.env.PASSWORD || "a52oYsj2-nxGs772lmNoySxAoMMiJElJ";
const server = process.env.SERVER || "surus.db.elephantsql.com";

const sequelize = new Sequelize(
  `postgres://${db_name}:${password}@${server}/${db_name}`
);

export default sequelize;
