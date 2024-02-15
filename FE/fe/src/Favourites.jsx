import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Favourites = () => {
    const [movies,setMovies]=useState([])
    const [userName,setuserName]=useState(JSON.parse(localStorage.getItem('userName')))
    useEffect(()=>{
      axios
        .get(`https://dfadfad.onrender.com/movies/data?userName=${userName}`, {
        
        })
        .then((res) => setMovies(res.data));  
    })
 console.log(movies)
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {movies?.map((movie) => (
        <div
          className="movie-card"
          key={movie.title}
          style={{ width: "100%", textAlign: "center" }}
        >
          <img
            src={movie.image}
            className="movie-image"
            alt={movie.title}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="movie-details">
            <h5 className="movie-title">{movie.title}</h5>
            <p className="movie-year">Year: {movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favourites
