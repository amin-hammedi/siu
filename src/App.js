import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (location) => {
    if (!favorites.includes(location)) {
      setFavorites([...favorites, location]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage onAddFavorite={addFavorite} />} />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
