const express = require("express");
const router = express.Router();
const workoutArray = require("../models/workout");
const { getAllWorkouts, getWorkout } = require("../queries/workout");

// GET ALL WORKOUTS
router.get("/", async (req, res) => {
  const allWorkouts = await getAllWorkouts();
  if (allWorkouts[0]) {
    res.status(200).json(allWorkouts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});


// GET A SINGLE WORKOUT
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const workout = await getWorkout(id);
  if (workout) {
    res.json(workout);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE A NEW WORKOUT
router.post("/", checkBoolean, checkName, async (req, res) => {
  const color = await createColor(req.body);
  res.json(color);
});

// DELETE A WORKOUT 
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const workoutToDeleteIndex = workoutArray.findIndex(workout => workout.id === +id)

  if (workoutToDeleteIndex !== -1) {
    workoutArray.splice(workoutToDeleteIndex, 1)
    res.redirect("/workouts")
  } else {
    res.status(404).send({error: `Workout with id: ${id} not found!`})
  }
})

// UPDATE A WORKOUT 
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const workoutToUpdateIndex = workoutArray.findIndex(workout => workout.id === +id)

  if (workoutToUpdateIndex !== -1) {
    workoutArray[workoutToUpdateIndex] = req.body
    res.status(200).json(workoutArray[workoutToUpdateIndex])
  } else {
    res.status(404).send({error: `Workout with id: ${id} not found!`})
  }
})

module.exports = router;