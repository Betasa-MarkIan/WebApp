
const express = require('express')
const router = express.Router()
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  patchWorkout
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/post', createWorkout)

// DELETE a workout
router.delete('/delete/:id', deleteWorkout)

// UPDATE a workout
router.patch('/update/:id', patchWorkout)


module.exports = router