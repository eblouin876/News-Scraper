let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ArticlesSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  body: {
    type: String,
    trim: true,
    required: "Body is required"
  },
  link: {
    type: String,
    trim: true,
    required: "Link is required"
  },
  comments: {
    type: String,
    trim: true
  },
  saved: {
    type: Boolean,
    default: false
  }
});

let Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;
