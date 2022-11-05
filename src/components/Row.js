import React, { useEffect, useState } from "react";
import axios from "@/axios";
import "./Row.scss";

const image_base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, apiUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
      console.log(request);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            alt={movie.name}
            src={`${image_base_url}${movie.poster_path}`}
            className="row__poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
