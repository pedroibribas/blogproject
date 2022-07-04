const express = require('express');
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getMe,
} = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// @route /api/users
router
  .route('/')
  .post(registerUser)
  .put(protect, updateUser)
  .delete(protect, deleteUser);
router.post('/login', loginUser);
router.get('/:id', getUser)
router.get('/me', protect, getMe);

module.exports = router;