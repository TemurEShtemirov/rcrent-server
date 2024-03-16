import User from "../model/User.js";
import Car from "../model/Cars.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get user by UUID
export const getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get users by query
export const getUsersByQuery = async (req, res) => {
  const { queryParam } = req.query;
  try {
    const users = await User.findAll({
      where: {
        /* Your query conditions */
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const rentCar = async (req, res) => {
  const {
    full_name,
    email,
    phone_number,
    password,
    car,
    pickup_location,
    return_location,
  } = req.body;

  try {
    // Find the car by title to get necessary details
    const carDetails = await Car.findOne({ where: { title_car: car } });
    // .findOne({
    // where: {
    //     id: [1,2,3,4]
    // }
    if (!carDetails) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Create the user with required details
    const user = await User.create({
      full_name,
      email,
      phone_number,
      password,
      car,
      date_receiving: new Date(),
      return_date: new Date(),
      receipt_time: new Date().toLocaleTimeString(),
      return_time: new Date().toLocaleTimeString(),
      pickup_location,
      return_location,
      rented_car_id: carDetails.uuid,
      rental_start_date: new Date(),
      rental_end_date: new Date(),
    });

    // Update the rented status of the car
    await Car.update({ isRent: true }, { where: { title_car: car } });

    return res.status(201).json({ message: "Car rented successfully", user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Update a user by UUID
export const updateUserById = async (req, res) => {
  const userId = req.params.id;
  const {
    full_name,
    email,
    phone_number,
    password,
    car,
    date_receiving,
    return_date,
    receipt_time,
    return_time,
    pickup_location,
    return_location,
    rented_car_id,
    rental_start_date,
    rental_end_date,
  } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.update({
      full_name,
      email,
      phone_number,
      password,
      car,
      date_receiving,
      return_date,
      receipt_time,
      return_time,
      pickup_location,
      return_location,
      rented_car_id,
      rental_start_date,
      rental_end_date,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Patch a user by UUID
export const patchUserById = async (req, res) => {
  const userId = req.params.id;
  const updateFields = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.update(updateFields);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
  try {
    await User.destroy({ truncate: true });
    return res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete user by UUID
export const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
