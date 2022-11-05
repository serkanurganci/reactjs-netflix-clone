import React, { useEffect, useState } from "react";
import axios from "@/axios";

function Row({ title, apiUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h1>{title}</h1>
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
}

export default Row;
