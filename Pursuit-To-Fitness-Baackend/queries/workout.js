const db = require("../db/dbConfig.js");

const getAllWorkouts = async () => {
    try {
      const allWorkouts = await db.any("SELECT * FROM workouts");
      return allWorkouts;
    } catch (error) {
      return error;
    }
  };

  const getWorkout = async (id) => {
    try {
      const oneWorkout = await db.one("SELECT * FROM workouts WHERE id=$1", id);
      return oneWorkout;
    } catch (error) {
      return error;
    }
  };

  const createWorkout = async (workout) => {
    try {
      const newWorkout = await db.one(
        "INSERT INTO workouts (name, body_part, is_favorite, intensity_level, muscles, date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [workout.name, workout.body_part, workout.is_favorite, workout.intensity_level, workout.muscle, workout.date]
      );
      return newWorkout;
    } catch (error) {
      return error;
    }
  };

  const deleteWorkout = async (id) => {
    try {
      const deletedWorkout = await db.one(
        "DELETE FROM workouts WHERE id = $1 RETURNING *",
        id
      );
      return deletedWorkout;
    } catch (error) {
      return error;
    }
  };

  const updateWorkout = async (id, workout) => {
    try {
      const updatedWorkout = await db.one(
        "UPDATE workouts SET name=$1, body_part=$2, is_favorite=$3, intensity_level=$4, muscles=$5 where id=$6 RETURNING *",
        [workout.name, workout.body_part, workout.is_favorite, workout.intensity_level, workout.muscles, id]
      );
      return updatedWorkout;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
  }