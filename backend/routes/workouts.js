const express = require("express");
const Workout = require("../models/workoutModel");
const Controller = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", Controller.getWorkouts);

// GET a single workout
router.get("/:id", Controller.getWorkout);

// POST a new workout
router.post("/", Controller.createWorkout);

// DELETE a workout
router.delete("/:id", Controller.deleteWorkout);

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
