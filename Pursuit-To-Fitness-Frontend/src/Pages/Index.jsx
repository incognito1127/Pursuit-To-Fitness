import React from 'react'
import Workouts from '../Components/Workouts'

const Index = ({filterWorkoutsByBodyPart, filteredWorkouts, bodyPart, workouts, setBodyPart}) => {
  return (
    <div>
      <Workouts filteredWorkouts = { filteredWorkouts } filterWorkoutsByBodyPart={ filterWorkoutsByBodyPart } bodyPart={ bodyPart } workouts = {workouts} />
    </div>
  )
}

export default Index