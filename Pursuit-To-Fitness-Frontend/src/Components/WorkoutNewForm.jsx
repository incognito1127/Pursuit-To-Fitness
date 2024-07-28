import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const WorkoutNewForm = () => {
  const API = import.meta.env.VITE_API_URL;

  let navigate = useNavigate();

  const [workout, setWorkoutDetails] = useState({name:"", body_part:"", is_favorite:"", intensity_level:"", muscle:"", description:""});

  const handleTextChange = (event) =>{
    setWorkoutDetails({...workout, [event.target.id]: event.target.value});
  }

  const addWorkout = () => {
    fetch(`${API}/workouts/`,{
      method:"POST",
      body: JSON.stringify(workout),
      headers:{
        "Content-Type" : "application/json"
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(workout);
    addWorkout();
    setWorkoutDetails({name:"", body_part:"", is_favorite:"", intensity_level:"", muscle:"", description:""});
    navigate("/workouts")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h3>Favorite?</h3>
        <div className='is_favorite'>
          <label htmlFor="true">True<input type="radio" id="is_favorite" name="favorite" onChange={handleTextChange} checked={workout.is_favorite = "true"} /></label>
          <label htmlFor="false">False<input type="radio" id="is_favorite" name="favorite" onChange={handleTextChange} checked={workout.is_favorite = "false"} /></label>
        </div>
        <label htmlFor= "name">Name:</label>
        <input id='name' type='text' value={workout.name} onChange={handleTextChange}required/>
        <label htmlFor="body_part">Targeting:</label>
        <input id='body_part' type='text' value={workout.body_part} onChange={handleTextChange} required />
        <label htmlFor="intensity_level">Intensity Level:</label>
        <input id='intensity_level' type='number' value={workout.intensity_level} onChange={handleTextChange} />
        <label htmlFor= "muscle">Muscle:</label>
        <input id="muscle" type="text" value={workout.muscle} onChange={handleTextChange} required></input>
        <label htmlFor="description">Description:</label>
        <textarea id="description" type="text" value={workout.description} onChange={handleTextChange}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default WorkoutNewForm