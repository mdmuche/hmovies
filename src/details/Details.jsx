import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import playnow from "../assets/Play.svg";
import "./Details.scss";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const apiKey = "683d4390604ff2aae30edcc141af510c";

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const data = response.data;
        console.log("Movie Details Response:", data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchMovieGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/genres?api_key=${apiKey}&language=en-US`
        );
        const genreData = response.data.genres;
        console.log("Genre Data:", genreData);
        setGenres(genreData);
      } catch (error) {
        console.error("Error fetching movie genres:", error);
      }
    };

    fetchMovieDetails();
    fetchMovieGenres();
  }, [id]);

  if (!movieDetails) {
    return <span className="loader"></span>;
  }

  console.log("Genres:", genres);
  console.log("Poster URL:", movieDetails.poster_path);

  return (
    <>
      <div className="moviedetail-section">
        <div
          className="moviedetail-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.734), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "60vh",
          }}
        >
          <Nav />
          <div className="img-container">
            <img src={playnow} alt="" />
          </div>
        </div>
        <div className="moviedetail">
          <h2 data-testid="movie-title">{movieDetails.title}</h2>
          <p data-testid="movie-release-date" className="para">
            Released Date in{movieDetails.release_date}
          </p>
          <p data-testid="movie-overview" className="para">
            Runtime(in minutes): {movieDetails.runtime}
          </p>
          <div className="moviedetail-overview">
            <p>{movieDetails.overview}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Details;
