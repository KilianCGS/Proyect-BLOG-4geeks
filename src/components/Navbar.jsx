import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStore } from "../hooks/useGlobalReducer";

export default function Navbar() {
  const { store, dispatch } = useGlobalStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleRemoveFavorite = (item) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: item });
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">Lord of the Rings: Blog from api</h2>
      <div className="navbar-links">
        <Link to="/characters" className="navbar-link">Characters</Link>
        <Link to="/movies" className="navbar-link">Movies</Link>

        <div className="favorites-dropdown">
          <button
            className="favorites-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Favorites ({store.favorites.length})
          </button>

          <ul className={`favorites-list ${dropdownOpen ? "show" : ""}`}>
            {store.favorites.length === 0 && <li>No favorites yet</li>}
            {store.favorites.map((fav) => (
              <li key={fav._id} className="favorites-item">
                {fav.name}
                <button onClick={() => handleRemoveFavorite(fav)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
