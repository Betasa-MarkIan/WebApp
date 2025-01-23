const mongoose = require('mongoose')

const workoutPlanSchema = mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  load: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]
  }
}, { timestamps: true })

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema)