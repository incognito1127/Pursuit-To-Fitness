import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'

import NavBar from './Components/NavBar'
import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL

function App() {

  const [filteredWorkouts,setFilteredWorkouts] = useState([]);
  const [bodyPart,setBodyPart] = useState("");
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    fetch(`${API}/workouts`)
      .then((res) => {
      return res.json()
      })
      .then(resJSON => {
        setWorkouts(resJSON)
      })
    .catch((error) => console.error(error))
  }, [])

  function filterWorkoutsByBodyPart(ele){
    setBodyPart(ele)
    setFilteredWorkouts(workouts.filter((ele) => ele.body_part.toLowerCase().includes(bodyPart.toLowerCase())))
  }

  return (
    <div>
      <Router>
        <NavBar bodyPart = { bodyPart } setBodyPart = { setBodyPart } />
        <main>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/workouts' element={<Index filteredWorkouts = { filteredWorkouts } filterWorkoutsByBodyPart={ filterWorkoutsByBodyPart } bodyPart={ bodyPart } workouts = {workouts} setBodyPart={setBodyPart}/> }/>
            <Route path='/workouts/:id' element={<Show/> } />
            <Route path='/workouts/:id/edit' element={ <Edit/>} />
            
            <Route path='/workouts/new' element={<New/> } />
            
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App