import { Router } from "express";
import { createCar, deleteAllCars, deleteCarById, getAllCars, getCarById, getCarsByQuery, partialUpdateCarById, updateCarById } from "../controllers/cars.controller";

const CarRouter = Router();

CarRouter.get("/", getAllCars);

// GET car by ID
CarRouter.get("/:id", getCarById);

// GET cars by query
CarRouter.get("/query", getCarsByQuery);

// POST a new car
CarRouter.post("/", createCar);

// PUT (update) car by ID
CarRouter.put("/:id", updateCarById);

// PATCH (partial update) car by ID
CarRouter.patch("/:id", partialUpdateCarById);

// DELETE all cars
CarRouter.delete("/", deleteAllCars);

// DELETE car by ID
CarRouter.delete("/:id", deleteCarById);


export default CarRouter