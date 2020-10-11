import React, { useState, useEffect } from "react";
import axios from "./axios";
import './row.css'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
      .then((url) => {
        
        const urlParams = new URLSearchParams (new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log())
    }
  }

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {autoplay: 1}
  }

  return (
    <div className="row">
      <h3>{title}</h3>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            className="row_poster"
          />
        ))}
      </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>   }   
    </div>
  );
}

export default Row;
