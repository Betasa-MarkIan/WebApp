const Workout = require('../models/workoutModels')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
  } catch (error){
    res.status(400).json({error: error.message})
  }
}

// SINGLE workout
const getWorkout = async (req, res) => {
  const { id } =req.params
 
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return (
        res.status(404).json({ error: 'No workout found with this ID' })
      )
    }

    const workout = await Workout.findById(id)

    if (!workout) {
      return res.status(404).json({error: 'No such workout found'})
    } else {
        return res.status(200).json(workout)
      }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


// POST new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  // add doc to db
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error){
    return res.status(400).json({error: error.message})
  }
}

// DELETE a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout found with this id'})
    }

    const workout =  await Workout.findOneAndDelete({_id: id})

    if(!workout) {
      return res.status(404).json({error: 'No such workout found'})
    } else {
      return res.status(200).json({message: 'Workout deleted successfully', workout})
    }

  } catch (error){
    return res.status(404).json({error: error.message})
  }
}

// UPDATE a workout
const patchWorkout = async (req, res) => {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout found with this id'})
    }

    const workout =  await Workout.findOneAndUpdate(
      { _id: id}, 
      { ...req.body }, //fields to update
      { new: true } //return the new values
    )

    if(!workout) {
      return res.status(404).json({error: 'No such workout found'})
    } else {
      return res.status(200).json({message: 'Workout updated successfully', workout})
    }

  } catch (error){
    return res.status(404).json({error: error.message})
  }
}


module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  patchWorkout
}