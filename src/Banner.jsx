import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to right,black 0%,white 100%),url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

        <button className="banner_button" >Watch Trailer</button>

        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="fade_bottom"/>
    </div>
  );
}

export default Banner;

