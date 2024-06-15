import React from "react";
import "../App.css";

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite}>{favorite}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
