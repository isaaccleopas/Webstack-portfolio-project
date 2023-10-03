const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const authController = require('./controllers/authController')
const app = express()

// connect mongodb
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB has been started successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/auth", authController)

// start server
app.listen(process.env.PORT, () => console.log('Server has been started successfully'))
