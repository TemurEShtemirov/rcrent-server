import { Router } from "express";
import {
  deleteAllUsers,
  deleteUserById,
  getUserById,
  getUsers,
  getUsersByQuery,
  rentCar,
} from "../controllers/controller.user.js";

const UserRouter = Router();

UserRouter.get("/", getUsers);

// GET user by ID
UserRouter.get("/:id", getUserById);

// GET user by query
UserRouter.get("/query", getUsersByQuery);

// POST a rent car
UserRouter.post("/", rentCar);

// DELETE all user
UserRouter.delete("/", deleteAllUsers);

// DELETE car by ID
UserRouter.delete("/:id", deleteUserById);

export default UserRouter;
