

const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

// Route to get all movies for a specific user
router.get("/data", async (req, res) => {
  const { userName } = req.query;

  try {
    // Find movies for the specified user
    const userMovies = await Movie.findOne({ userName });

    if (!userMovies) {
      return res.json({ message: "No movies found for this user" });
    }

    res.json(userMovies.movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/add", async (req, res) => {
  const { userName, movie } = req.body;

  try {
    // Find user's movies
    let userMovies = await Movie.findOne({ userName });

    if (!userMovies) {
      // If user does not exist, create a new entry with the new movie
      let movieArray=[movie]
      userMovies = new Movie({ userName, movies: movieArray });
    } else {
      // If user exists, push the new movie to the movies array
      userMovies.movies.push(movie);
    }

    // Save the updated/created entry
    await userMovies.save();

    res.json(userMovies.movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
