const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Nome obrigatório']
    },
    email: {
      type: String,
      required: [true, 'Email obrigatório'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Senha obrigatório']
    },
    picture: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);