const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  equipment: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'shoulder',
      'chest',
      'back-wing',
      'forearm',
      'abs-core',
    ]
  },
})


module.exports = mongoose.model('Exercise', exerciseSchema)