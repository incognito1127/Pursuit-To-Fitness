import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const WorkoutNewForm = () => {
  const API = import.meta.env.VITE_API_URL;

  let navigate = useNavigate();

  const [workout, setWorkoutDetails] = useState({name:"", body_part:"", is_favorite:"", intensity_level:"", muscle:"", description:""});

  const handleTextChange = (event) =>{
    setWorkoutDetails({...workout, [event.target.id]: event.target.value})
  }

  const addWorkout = () => {
    fetch(`${API}/workouts`,{
      method:"POST",
      body: JSON.stringify(workout),
      headers:{
        "Content-Type" : "application/json"
      }
    })
  }

  const handleSubmit = (event) => {
    event.PreventDefault();
    addWorkout();
    setWorkoutDetails({name:"", body_part:"", is_favorite:"", intensity_level:"", muscle:"", description:""});
    navigate("/workouts")
  }

  return (
    <div>WorkoutNewForm
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input id='name' type='text' value={workout.name} onChange={handleTextChange}required/>
        <label>Targeting:</label>
        <input id='body_part' type='text' value={workout.body_part} onChange={handleTextChange} required />
        <label>Intensity Level</label>
        <input id='intensity_level' type='number' value={workout.intensity_level} onChange={handleTextChange} />
        <label>Muscle</label>
        <input id="muscle" type="text" value={workout.muscle} onChange={handleTextChange} required></input>
        <label>Description</label>
        <textarea id="description" type="text" value={workout.description} onChange={handleTextChange}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default WorkoutNewForm