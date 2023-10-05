const Property = require('../models/Property');
const User = require('../models/User');
const statisticsController = require('express').Router();

// Get statistics for properties and users
statisticsController.get('/', async (req, res) => {
  try {
    const propertyCount = await Property.countDocuments();
    const userCount = await User.countDocuments();

    return res.status(200).json({ propertyCount, userCount });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = statisticsController;
