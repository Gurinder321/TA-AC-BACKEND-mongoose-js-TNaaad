const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: String,
    likes: Number,
    author: mongoose.Types.ObjectId,
    comments: {
      content: String,
      author: mongoose.Types.ObjectId,
      article: String,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
