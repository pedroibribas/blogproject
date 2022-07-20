const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  getPosts,
  setPost,
  getUserPosts,
  getPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

const router = express.Router();

// @route /api/posts/
router.route('/').get(getPosts).post(protect, setPost);
router.route('/user/:username').get(getUserPosts);
router
  .route('/:id')
  .get(getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;