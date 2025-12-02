import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";

const IMAGENES_MOVIES = {
  "The Fellowship of the Ring": "/src/images/ESDLA1.png",
  "The Two Towers": "/src/images/ESDLA2.png",
  "The Return of the King": "/src/images/ESDLA3.png"
};

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://the-one-api.dev/v2/movie", {
      headers: { Authorization: "Bearer V_YdK4FMCzBbIilRFB9x" }
    })
      .then(res => res.json())
      .then(data => {
        const docs = data?.docs || [];

        const filtradas = docs.filter(movie =>
          Object.keys(IMAGENES_MOVIES).includes(movie.name)
        );

        setMovies(filtradas);
      })
      .catch(err => {
        console.error(err);
        setMovies([]); 
      });
  }, []);

  return (
    <div className="home-grid">
      {movies.map(movie => (
        <ItemCard
          key={movie._id}
          item={{
            ...movie,
            name: movie.name,
            image: IMAGENES_MOVIES[movie.name]
          }}
          type="movie"
        />
      ))}
    </div>
  );
}
