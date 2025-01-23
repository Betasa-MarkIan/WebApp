
//imports the express.js library
const express = require('express')
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const http = require('http')
const server = http.createServer(app)

require('dotenv').config()

// express app - instance of express app
const workoutRoutes = require('./routes/workouts')
const exerciseRoutes = require('./routes/exercises')
const workoutPlanRoutes = require('./routes/workoutplans')

//global middleware
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
// app.use('/api/workouts', workoutRoutes)
// app.use('/api/exercises', exerciseRoutes)
// app.use('/api/workoutplans', workoutPlanRoutes)

//for testing
app.get('/', (req, res)=> {
  res.send("server is running")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`)
})


// Connect to db - async 
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     // listen for request
//     app.listen(process.env.PORT, () => { 
//     console.log('connected to db...')
//     console.log('listening on port 4000')
//    })
//   })
//   .catch((error) => {
//     console.log(error)
//   })

  // mongoose.
  //   connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then(() => console.log("MongoDB connected...listening on port 4000"))
  //   .catch((error) => {
  //     console.error("MongoDB Connection error:", error.message)
  //     process.exit(1)
  //   })

  
