import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <button>
        <Link to= "/workouts">Workouts</Link>
        <Link to="/workouts/new">New Workout</Link>
        </button>
    </div>
  )
}

export default NavBar