import { Router } from "express";
import {
  createCar,
  deleteAllCars,
  deleteCarById,
  getAllCars,
  getCarById,
  getCarsByQuery,
  partialUpdateCarById,
  updateCarById,
} from "../controllers/cars.controller.js";
import upload from "../helper/upload.js";

const CarRouter = Router();

CarRouter.get("/", getAllCars);

// GET car by ID
CarRouter.get("/:id", getCarById);

// GET cars by query
CarRouter.get("/query", getCarsByQuery);

// POST a new car
CarRouter.post("/", upload.array("images", 5), createCar);

// PUT (update) car by ID
CarRouter.put("/:id", upload.array("images", 5), updateCarById);

// PATCH (partial update) car by ID
CarRouter.patch("/:id", upload.array("images", 5), partialUpdateCarById);

// DELETE all cars
CarRouter.delete("/", deleteAllCars);

// DELETE car by ID
CarRouter.delete("/:id", deleteCarById);

export default CarRouter;
