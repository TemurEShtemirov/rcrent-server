import User from "../model/User.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create rent of car for a user
export const rentCar = async (req, res) => {
  const { userId, carId, rentalStartDate, rentalEndDate } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    // Create rental record for the user
    await user.update({
      rented_car_id: carId,
      rental_start_date: rentalStartDate,
      rental_end_date: rentalEndDate,
    });
    res.status(200).json({ message: "Car rented successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get users by query parameters
export const getUsersByQuery = async (req, res) => {
  const { pickupLocation, returnLocation } = req.query;
  try {
    const users = await User.findAll({
      where: {
        pickup_location: pickupLocation,
        return_location: returnLocation,
      },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
  try {
    await User.destroy({
      where: {},
      truncate: true,
    });
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user by ID
export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
