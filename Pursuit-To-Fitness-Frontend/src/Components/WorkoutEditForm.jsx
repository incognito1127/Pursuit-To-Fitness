import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const WorkoutEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState({
    name: '',
    body_part: '',
    is_favorite: false,
    intensity_level: 0,
    muscles: '',
    description: '',
    video: ''
  });

  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then(res => res.json())
      .then(data => setWorkout(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleTextChange = (e) => {
    setWorkout({...workout, [e.target.id]:e.target.value})
  }

  const updateWorkout = () => {
    fetch(`${API}/workouts/${id}` , {
      method: "PUT",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      navigate(`/workouts/${id}`)
    })
    .catch((error) => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWorkout();
    setWorkout({name: '',
      body_part: '',
      is_favorite: false,
      intensity_level: 0,
      muscles: '',
      date: '',
      video: ''})
  }
  return (
    <div>
      <h1>Edit Workout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={workout.name}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label>Body Part:</label>
          <input
            type="text"
            name="body_part"
            id="body_part"
            value={workout.body_part}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label>Is Favorite:</label>
          <input
            type="checkbox"
            name="is_favorite"
            checked={workout.is_favorite}
            onChange={() => setWorkout(prevState => ({
              ...prevState,
              is_favorite: !prevState.is_favorite
            }))}
          />
        </div>
        <div>
          <label>Intensity Level:</label>
          <input
            type="number"
            name="intensity_level"
            id="intensity_level"
            value={workout.intensity_level}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label>Muscles:</label>
          <input
            type="text"
            name="muscles"
            id="muscles"
            value={workout.muscles}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={workout.description}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label>Video URLs:</label>
            <div key={id}>
              <label>Video</label>
              <input
                type="text"
                name="video"
                id="video"
                value={workout.video}
                onChange={handleTextChange}
              />
            </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WorkoutEditForm;
