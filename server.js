
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
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('/api/workoutplans', workoutPlanRoutes)



//Connect to db - async 
mongoose.connect(process.env.MONGO_URI, {  
  useNewUrlParser: true, 
  useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => { 
    console.log('connected to db...')
    console.log('listening on port 5000')
   })
  })
  .catch((error) => {
    console.log(error)
  })

const path = require("path");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist"))); // Adjust path if necessary

// Catch-all handler to serve React's index.html for unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

