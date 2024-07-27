DROP DATABASE IF EXISTS workouts_dev;
CREATE DATABASE workouts_dev;

\c workouts_dev;

CREATE TABLE workouts (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    body_part TEXT NOT NULL,
    is_favorite BOOLEAN,
    intensity_level INT,
    muscles TEXT,
    description TEXT,
    video TEXT
);