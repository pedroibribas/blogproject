const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const {
  getPosts,
  setPost,
  getPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

const router = express.Router();

// @route /api/posts/
router.route('/').get(getPosts).post(protect, setPost);
router
  .route('/:id')
  .get(getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;