import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "../component/MovieCard";
import Slider from "../component/Slider";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&query=";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&page=1`;

const Home = () => {
  const [movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovie(SEARCH_API + searchTerm);
    }

    console.log(searchTerm);
  };
  const getMovie = async (api) => {
    const { data } = await axios.get(api);

    setMovie(data.results);
  };
  return (
    <>
      <div className="search-form">
        <form onSubmit={handleSubmit} action="">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search a Film"
          />
        </form>
      </div>
      {searchTerm ? null : <Slider movie={movies} />}

      <div className="movie-container">
        {movies.map((movie, i) => (
          <MovieCard key={i} {...movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
