module.exports = {
    cardio: [
      { id: 1, name: "Running", duration: "30 minutes", intensity: "moderate" },
      { id: 2, name: "Cycling", duration: "45 minutes", type: "stationary bike" },
      { id: 3, name: "Jump Rope", duration: "15 minutes" },
      { id: 4, name: "HIIT", duration: "20 minutes", details: "30 seconds sprint, 30 seconds rest" }
    ],
    strength: {
      upperBody: [
        { id: 5, name: "Push-ups", sets: 3, reps: 12 },
        { id: 6, name: "Dumbbell Bench Press", sets: 3, reps: 10 },
        { id: 7, name: "Pull-ups", sets: 3, reps: 8 },
        { id: 8, name: "Bicep Curls", sets: 3, reps: 15 }
      ],
      lowerBody: [
        { id: 9, name: "Squats", sets: 3, reps: 15 },
        { id: 10, name: "Lunges", sets: 3, reps: 12, details: "each leg" },
        { id: 11, name: "Deadlifts", sets: 3, reps: 10 },
        { id: 12, name: "Calf Raises", sets: 3, reps: 20 }
      ],
      core: [
        { id: 13, name: "Plank", sets: 3, duration: "1 minute" },
        { id: 14, name: "Russian Twists", sets: 3, reps: 20, details: "each side" },
        { id: 15, name: "Bicycle Crunches", sets: 3, reps: 25, details: "each side" },
        { id: 16, name: "Leg Raises", sets: 3, reps: 15 }
      ]
    },
    flexibility: [
      { id: 17, name: "Yoga", duration: "30 minutes" },
      { id: 18, name: "Dynamic Stretching", duration: "10 minutes", details: "pre-workout" },
      { id: 19, name: "Static Stretching", duration: "10 minutes", details: "post-workout" }
    ],
    fullBody: [
      {
        id: 20,
        name: "Circuit Training",
        rounds: 4,
        duration: "1 minute each exercise",
        rest: "1 minute between rounds",
        exercises: ["Burpees", "Push-ups", "Squats", "Mountain Climbers", "Plank"]
      },
      {
        id: 21,
        name: "Bodyweight Exercises",
        exercises: [
          { id: 22, name: "Jumping Jacks", sets: 3, reps: 30 },
          { id: 23, name: "Dips", sets: 3, reps: 12 },
          { id: 24, name: "Step-ups", sets: 3, reps: 15, details: "each leg" },
          { id: 25, name: "Sit-ups", sets: 3, reps: 20 }
        ]
      }
    ]
  };