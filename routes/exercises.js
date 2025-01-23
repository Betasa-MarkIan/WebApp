
const express = require('express')
const router = express.Router()
const { getAllExercise, getExerciseByCategory, addExerciseByCategory, deleteExerciseByCategory, deleteAllExerciseByCategory } = require('../controllers/exerciseController')

//get all exercises
router.get('/', getAllExercise)

//get exercises by category
router.get('/:category', getExerciseByCategory)

//post exercise by category
router.post('/post', addExerciseByCategory)

//delete exercise by category
router.delete('/delete/:id', deleteExerciseByCategory)

//delete ALL exercise
router.delete('/delete', deleteAllExerciseByCategory)

module.exports = router