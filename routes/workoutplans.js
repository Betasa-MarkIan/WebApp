
const express = require('express')
const router = express.Router()
const { getAllMyWorkout, getMyWorkoutByCategory, addMyWorkout, deleteMyWorkoutById, deleteMyWorkoutByCategory, deleteAllMyWorkout, patchMyWorkout} = require('../controllers/workoutPlanController')

//get all myWorkout
router.get('/', getAllMyWorkout)

//get myWorkout by category
router.get('/:category', getMyWorkoutByCategory)

//post myWorkout
router.post('/post', addMyWorkout)

//delete myWorkout by id
router.delete('/delete/:id', deleteMyWorkoutById)

//delete ALL myWorkout by category
router.delete('/delete/category/:category', deleteMyWorkoutByCategory)

//delete ALL myWorkout
router.delete('/delete', deleteAllMyWorkout)

// UPDATE a workout
router.patch('/update/:id', patchMyWorkout)

module.exports = router