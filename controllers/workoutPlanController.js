const WorkoutPlan = require('../models/workoutPlanModel')
const mongoose = require('mongoose')

// GET all myWorkout
const getAllMyWorkout = async (req, res) => {
  try {
    const workoutplan = await WorkoutPlan.find({})
    res.status(200).json(workoutplan)
  }
  catch (error) {
    res.status(400).json({error: error.message})
  }
}

// GET workout by category

const getMyWorkoutByCategory = async (req, res) => {
  const { category } = req.params

  try {
    const workoutplan = await WorkoutPlan.find({ category }) 
      return res.status(200).json(workoutplan)
      }
  catch (error) {
      return res.status(500).json({ error: error.message });
    }
}

// ADD workout 
const addMyWorkout = async (req, res) => {
const { title, equipment, load, reps, category } = req.body

try {
  const workoutplan = await WorkoutPlan.create({title, equipment, load, reps, category})
  res.status(200).json(workoutplan)
}
catch (error) {
  return res.status(400).json({ error: error.message })
}}

// DELETE workout by id
const deleteMyWorkoutById = async (req, res) => {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such exercise found with this id'})
    }

    const workoutplan =  await WorkoutPlan.findOneAndDelete({_id: id})

    if(!workoutplan) {
      return res.status(404).json({error: 'No such exercise found'})
    } else {
      return res.status(200).json({message: 'Exercise deleted successfully', workoutplan})
    }

  } catch (error){
    return res.status(404).json({error: error.message})
  }}

// DELETE workout by category
const deleteMyWorkoutByCategory = async (req, res) => {
  const { category } = req.params
  try {
    const workoutplan =  await WorkoutPlan.deleteMany({ category })
    if(workoutplan.deletedCount === 0 ) {
      return res.status(404).json({error: 'No such workout category found'})
    } else {
      return res.status(200).json({
        message: 'Workout category deleted successfully',
        deletedCount: workoutplan.deletedCount})
    }
  } catch (error) {
    return res.status(404).json({error: error.message})
  }
}

const deleteAllMyWorkout = async (req, res) => {
  try {
    const workoutplan = await WorkoutPlan.deleteMany({})
    if(!workoutplan) {
      return res.status(404).json({error: 'No such workout category found'})
    } else {
      return res.status(200).json('All myworkout deleted successfully', workoutplan)
    }
  } catch (error) {
      return res.status(404).json({error: error.message})
  } 
}

// UPDATE a workout
const patchMyWorkout = async (req, res) => {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout found with this id'})
    }

    const workoutplan =  await WorkoutPlan.findOneAndUpdate(
      { _id: id}, 
      { ...req.body }, //fields to update
      { new: true } //return the new values
    )

    if(!workoutplan) {
      return res.status(404).json({error: 'No such workout found'})
    } else {
      return res.status(200).json({message: 'Workout updated successfully', workoutplan})
    }

  } catch (error){
    return res.status(404).json({error: error.message})
  }
}

module.exports = {
  getAllMyWorkout, 
  getMyWorkoutByCategory, 
  addMyWorkout, 
  deleteMyWorkoutById, 
  deleteMyWorkoutByCategory, 
  deleteAllMyWorkout,
  patchMyWorkout
}
