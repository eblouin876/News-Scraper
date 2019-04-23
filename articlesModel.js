let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ArticlesSchema = new Schema({
  headline: {
    type: String,
    trim: true,
    required: "Headline is required"
  },
  summary: {
    type: String,
    trim: true,
    required: "Summary is required"
  },
  url: {
    type: String,
    trim: true,
    required: "URL is required"
  }
});

let Articles = mongoose.model("Articles", ArticlesSchema);

module.exports = Articles;
