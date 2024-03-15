import express from "express";
import "dotenv/config";
import CarRouter from "./routes/_api.cars.router.js";
import sequelize from "./config/db.config.js";
import UserRouter from "./routes/_api.user.router.js";
import cors from "cors";

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 2829;

  app.use(cors());
  app.use(express.json());
  app.use("/car", CarRouter);
  app.use("/rent", UserRouter);

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
  });
}

bootstrap();
