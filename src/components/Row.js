import React, { useEffect, useState } from "react";
import axios from "@/axios";
import "./Row.scss";
import { image_base_url } from "@/helpers";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, apiUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerVideoId, setTrailerVideoId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [apiUrl]);

  const handleOnClickMoviePoster = (movie) => {
    if (trailerVideoId) {
      setTrailerVideoId("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          setTrailerVideoId(params.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleOnClickMoviePoster(movie)}
            onError={(e) => (e.target.style.display = "none")}
            key={movie.id}
            alt={movie.name}
            src={`${image_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {trailerVideoId && <YouTube videoId={trailerVideoId} opts={opts} />}
    </div>
  );
}

export default Row;
