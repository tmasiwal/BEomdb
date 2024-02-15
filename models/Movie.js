const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  userName: String,
  movies: [],
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
