const express = require("express");
const router = express.Router();
const { getAllWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require("../queries/workout");



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
router.post("/", async (req, res) => {
  const workout = await createWorkout(req.body);
  res.json(workout);
});

// DELETE A WORKOUT 
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedWorkout = await deleteWorkout(id);
  if (deletedWorkout.id) {
    res.status(200).json(deletedWorkout);
  } else {
    res.status(404).json("Workout not found");
  }
});

// UPDATE A WORKOUT 
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedWorkout = await updateWorkout(id, req.body);
  res.status(200).json(updatedWorkout);
});

module.exports = router;