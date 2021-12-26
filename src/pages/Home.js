import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "../component/MovieCard";
import Slider from "../component/Slider";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&query=1";
const IMG_API = "https://image.tmdb.org/t/p/original";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&page=1`;

const Home = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(FEATURED_API);
    console.log(data.results);
    setMovie(data.results);
  };
  return (
    <>
      <Slider movie={movies} />
      <div className="movie-container">
        {movies.map((movie, i) => (
          <MovieCard key={i} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
