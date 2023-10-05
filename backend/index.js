const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const usersController =  require('./controllers/usersController');
const authController = require('./controllers/authController');
const propertyController = require('./controllers/propertyController');
const statisticsController = require('./controllers/statisticsController');
const app = express();

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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/user", usersController);
app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/statistics", statisticsController);

// start server
app.listen(process.env.PORT, () => console.log('Server has been started successfully'))
