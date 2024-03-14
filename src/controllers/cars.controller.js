import Car from "../model/Cars.js";

// GET all cars
export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET car by ID
export const getCarById = async (req, res) => {
  const { id } = req.params;
  try {
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET cars by query
export const getCarsByQuery = async (req, res) => {
  const { sortBy } = req.query;
  try {
    const cars = await Car.findAll({
      order: [[sortBy, "ASC"]],
    });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new car
export const createCar = async (req, res) => {
  const { body } = req;
  try {
    const car = await Car.create(body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT (update) car by ID
export const updateCarById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await Car.update(body, {
      where: {
        id,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PATCH (partial update) car by ID
export const partialUpdateCarById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await Car.update(body, {
      where: {
        id,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE all cars
export const deleteAllCars = async (req, res) => {
  try {
    await Car.destroy({
      truncate: true,
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE car by ID
export const deleteCarById = async (req, res) => {
  const { id } = req.params;
  try {
    await Car.destroy({
      where: {
        id,
      },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
