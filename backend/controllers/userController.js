const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Post = require('../models/postModel');
const User = require('../models/userModel');

// Register new user | Public | POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, picture } = req.body;

  if (!username | !email | !password) {
    res.status(400);
    throw new Error('Nome, email e senha obrigatórios');
  }

  if (await User.findOne({ email })) {
    res.status(400);
    throw new Error('O usuário já existe');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    picture,
    password: hashedPassword
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Dados do usuário inválidos');
  }
});

// Authenticate user | Public | POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const validation = await bcrypt.compare(password, user.password);

  if (user && validation) {
    res.status(200).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Credenciais inválidas');
  }
});

// Update user | Private | PUT /api/users
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('Usuário não autorizado');
  };

  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  };

  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true
  });

  res.status(200).json(updatedUser);
});

// Delete user | Private | PUT /api/users
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('Usuário não autorizado');
  };

  await Post.deleteMany({ user: req.user.id });
  await user.remove();

  res.status(200).json({ id: req.user.id });
});

// Get User | Public | GET /api/users/:username
const getUser = asyncHandler(async (req, res) => {
  const { username } = await User.findOne({ username: req.params.username });

  res.status(200).json({ username });
});

// Get Me | Private | GET /api/users/me
const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
    picture
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Update user | Private | DELETE /api/users

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getMe
};