import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import "./Feature.scss";
import { Link } from "react-router-dom";

const apiKey = "683d4390604ff2aae30edcc141af510c";

function Feature() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        );
        const movieData = response.data.results;

        setMovies(movieData);

        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const featuredMovies = movies.slice(0, 10);

  return (
    <div className="feature-section">
      <div className="feature-container">
        <div className="col1">
          <h2>Featured Movie</h2>
          <Link href="">See more {">"} </Link>
        </div>

        <div className="feature-movies">
          {featuredMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
