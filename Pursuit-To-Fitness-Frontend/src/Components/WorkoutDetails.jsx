import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

const WorkoutDetails = () => {
  const [workout, setWorkout] = useState({ "type": "", "durationInMinutes": 0, "caloriesBurned": 0, "date": "" })
  let { id } = useParams()
  let navigate = useNavigate()
  
  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then((res) => {
      return res.json()
      })
      .then(resJSON => {
        setWorkout(resJSON)
      })
      .catch(() => {
      navigate("/notfound")
    })

  }, [id, navigate])
  
  function handleDelete(){
    fetch(`${API}/workouts/${id}`, {
      method: 'DELETE'
    })
    .then(() => navigate('/workouts'))
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>WorkoutDetails</h1>
      <p>{workout.name}</p>
      <p>{workout.muscles}</p>
      <button>Edit</button>
      <button onClick={handleDelete} >Delete</button>
    </div>
  )
}

export default WorkoutDetails