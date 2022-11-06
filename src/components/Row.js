import React, { useEffect, useState } from "react";
import axios from "@/axios";
import "./Row.scss";
import { image_base_url } from "@/helpers";

function Row({ title, apiUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            alt={movie.name}
            src={`${image_base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
