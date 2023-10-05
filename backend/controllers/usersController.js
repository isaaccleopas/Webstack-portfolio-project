const User = require('../models/User');
const usersController = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');

// get all
usersController.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Count users
usersController.get('/count', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    return res.status(200).json({ count: userCount });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get individual user
usersController.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if(!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update user
usersController.put('/:userId', verifyToken, async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// delete user
usersController.delete('/:userId', verifyToken, async (req, res) => {
  const { userId } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    if(!deleteUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ msg: 'Successfully deleted user' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = usersController;
