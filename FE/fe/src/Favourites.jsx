import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Favourites = () => {
    const [movies,setMovies]=useState([])
    const [userName,setuserName]=useState(JSON.parse(localStorage.getItem('userName')))
    useEffect(()=>{
      axios.get(`https://dfadfad.onrender.com/movies/data`, {
          userName: userName,
        })
        .then((res) => console.log(res));  
    })
    console.log(userName)
  return (
    <div>
      
    </div>
  )
}

export default Favourites
