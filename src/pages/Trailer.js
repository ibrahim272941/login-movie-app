import React from "react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const IMG_API = "https://image.tmdb.org/t/p/original";
const youtubeUrl = "https://www.youtube.com/embed/";

const Trailer = () => {
  const [trailer, setTrailer] = useState("");
  const location = useLocation();
  const id = location.state.id;
  const posterPath = location.state.poster_path;
  const overview = location.state.overview;
  const title = location.state.title;
  console.log(id);
  useEffect(() => {
    getTrailer();
  }, []);

  const getTrailer = async () => {
    const data = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&language=en-US`
    );
    const result = data.data.results[0];
    const key = result.key;
    setTrailer(key);
  };
  return (
    <div className="trailer">
      <div className="trailer-overview">
        <div className="trailer-head">
          <h4 className="trailer-title">{title}</h4>
          <img className="backdrop" src={IMG_API + posterPath} alt="" />
        </div>
        <div className="trailer-parag-div">
          {/* <div className="vote">
            <div className="icon">
              <Icon
                className="imdb-icon"
                icon="cib:imdb"
                color="#f5c518"
                width="40"
              />
            </div>
            <p>{id.vote_average}</p>
          </div> */}
          <h4>Overview</h4>
          <p className="trailer-parag">{overview}</p>
        </div>
      </div>

      <iframe
        style={trailer ? { display: "block" } : { display: "none" }}
        src={youtubeUrl + trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
