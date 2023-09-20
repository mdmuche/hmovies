import { useEffect, useState } from "react";
import logo from "../assets/imdd.svg";
import play from "../assets/Play.svg";
import apple from "../assets/apple.png";
import "./FirstView.scss";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";

function FirstView() {
  const [movieList, setMovieList] = useState([]);
  const [ImgBg, setImgBg] = useState("");
  const apiKey = "683d4390604ff2aae30edcc141af510c";

  useEffect(() => {
    const movieFetch = async () => {
      try {
        await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            const popularMovies = data.results;
            const topMovies =
              popularMovies[Math.floor(Math.random() * popularMovies.length)];
            setMovieList(topMovies);

            setImgBg(
              `https://image.tmdb.org/t/p/original/${
                topMovies.poster_path
              }?t=${Date.now()}`
            );
          });
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    movieFetch();
  }, []);
  return (
    <section className="landing-section">
      <div
        className="landing"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.734), rgba(0, 0, 0, 0.5)), url(${ImgBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <Nav />
        <div className="landing-container">
          <div className="container">
            {movieList && (
              <>
                <h1>{movieList.title}</h1>
                <div className="landing-rating">
                  <img src={logo} alt="logo" />
                  <p>{(movieList.vote_average * 10).toFixed(1)} / 100</p>
                  <img src={apple} alt="apple" className="apple" />
                </div>
                <p className="landing-snippet">{movieList.overview}</p>
                <Link className="landing-button" to="#">
                  <img src={play} alt="play" />
                  <p>WATCH TRAILER</p>
                </Link>
              </>
            )}
          </div>
          <div className="pagination">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstView;
