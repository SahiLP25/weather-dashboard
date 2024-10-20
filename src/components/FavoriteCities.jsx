import React from "react";

const FavoriteCities = ({ favorites, onRemove }) => (
  <div className="favorite-cities">
    <h3>Favorite Cities:</h3>
    {favorites.map((city) => (
      <div key={city.id} className="favorite-city">
        <p>• {city.city}</p>
        <button onClick={() => onRemove(city.id)}>Remove</button>
      </div>
    ))}
  </div>
);

export default FavoriteCities;
