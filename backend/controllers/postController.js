const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const Post = require('../models/postModel');
const User = require('../models/userModel');

// Get posts | Private | GET /api/posts
const getPosts = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.query.user)) {
    res.status(400);
    throw new Error('Usuário inválido');
  };

  const user = await User.findById(req.query.user);

  if (!user) {
    res.status(400);
    throw new Error('Usuário não encontrado');
  };

  const posts = await Post.find({ user: req.query.user });

  res.status(200).json(posts);
});

// Set post | Private | POST /api/posts
const setPost = asyncHandler(async (req, res) => {
  const { title, text } = req.body;

  if (!title | !text) {
    res.status(400);
    throw new Error('Todos os campos são obrigatórios');
  };

  const post = await Post.create({
    title,
    text,
    user: req.user.id
  });

  res.status(200).json(post);
});

// Get post | Public | GET /api/posts/:id
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
});

// Update post | Private | PUT /api/posts/:id
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('O usuário não existe');
  };

  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error('O usuário não está autorizado');
  };

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.status(200).json(updatedPost);
});

// Delete post | Private | DELETE /api/posts/:id
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('O usuário não existe');
  };

  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error('O usuário não está autorizado');
  };

  await post.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPosts,
  setPost,
  getPost,
  updatePost,
  deletePost,
};