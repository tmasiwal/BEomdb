import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Favourites from './Favourites';

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default Allroute
