const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};

const getUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};

const createUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Not Implemented',
  });
};

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .patch(userController.updateUser)
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
