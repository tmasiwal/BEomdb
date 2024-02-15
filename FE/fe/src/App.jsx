import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userName, setUserName] = useState("");
  const [movies, setMovies] = useState([]);
 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchMovies = async () => {
    try {
      axios
        .get(`https://omdbapi.com/?apikey=89dbf159&s=${searchQuery}`)
        .then((res) => setMovies(res.data.Search));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleAddToFavorites = (Title,Year,Poster,Type) => {
    axios.post(`https://dfadfad.onrender.com/movies/add`, {
      userName: userName,
      movie: {
        title: Title,
        year: Year,
        image: Poster,
        type: Type,
      },
    });
  };
  const navigaet=useNavigate()
  const handleGo=()=>{
navigaet("/favourites");
  }
  const handlelocal=()=>{
    localStorage.setItem("userName",JSON.stringify(userName))
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies by title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={searchMovies}>
          Search
        </button>
      </div>
      <div className="search-container" style={{ width: "30%" }}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="search-button" onClick={handlelocal}>
          Search
        </button>
        <button onClick={handleGo}>Go To Favourites</button>
      </div>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie}>
            <img src={movie.Poster} className="movie-image" alt={movie.Title} />
            <div className="movie-details">
              <h5 className="movie-title">{movie.Title}</h5>
              <p className="movie-year">Year: {movie.Year}</p>
              <button
                className="add-favorite-btn"
                onClick={() =>
                  handleAddToFavorites(
                    movie.Title,
                    movie.Year,
                    movie.Poster,
                    movie.Year
                  )
                }
              >
                Add to Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
