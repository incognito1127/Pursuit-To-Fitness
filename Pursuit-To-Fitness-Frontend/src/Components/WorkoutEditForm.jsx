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
    date: '',
    video_urls: {}
  });

  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then(res => res.json())
      .then(data => setWorkout(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleVideoUrlChange = (e) => {
    const { name, value } = e.target;
    setWorkout(prevState => ({
      ...prevState,
      video_urls: {
        ...prevState.video_urls,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/workouts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    })
      .then(() => navigate(`/workouts/${id}`))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Edit Workout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={workout.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Body Part:</label>
          <input
            type="text"
            name="body_part"
            value={workout.body_part}
            onChange={handleChange}
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
            value={workout.intensity_level}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Muscles:</label>
          <input
            type="text"
            name="muscles"
            value={workout.muscles}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Video URLs:</label>
          {Object.keys(workout.video_urls).map(bodyPart => (
            <div key={bodyPart}>
              <label>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}:</label>
              <input
                type="text"
                name={bodyPart}
                value={workout.video_urls[bodyPart]}
                onChange={handleVideoUrlChange}
              />
            </div>
          ))}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default WorkoutEditForm;
