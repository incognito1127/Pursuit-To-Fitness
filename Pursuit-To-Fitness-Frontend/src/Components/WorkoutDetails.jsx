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
        console.log(resJSON)
        setWorkout(resJSON)
      })
      .catch(() => {
      navigate("/notfound")
    })

  }, [id, navigate])

  

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>WorkoutDetails</h1>
      <p>{workout.name}</p>
      <p>{workout.muscles}</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/L6M0j6AwDGQ?si=OwCNFEYIUHJG-C5p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      
    </div>
  )
}

export default WorkoutDetails