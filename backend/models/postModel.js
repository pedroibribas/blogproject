const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    username: {
      type: 'String',
      required: true
    },
    title: {
      type: String,
      required: [true, 'Sua publicação precisa de um título'],
      unique: true
    },
    text: {
      type: String,
      required: [true, 'Você precisa publicar algum texto']
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);