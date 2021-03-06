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

  useEffect(() => {
    getTrailer(id);
  }, []);

  const getTrailer = async (id) => {
    const data = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0dfeb1e3115d788bdd6ccd6d217d93cf&language=en-US`
    );
    const result = await data.data.results;
    const key = await result;
    setTrailer(key);
    console.log(key);
  };
  return (
    <div className="trailer">
      <div className="trailer-overview">
        <div className="trailer-head">
          <h4 className="trailer-title">{title}</h4>
          <img className="backdrop" src={IMG_API + posterPath} alt="" />
        </div>
        <div className="trailer-parag-div">
          <h4>Overview</h4>
          <p className="trailer-parag">{overview}</p>
        </div>
      </div>
      {trailer ? (
        trailer.map((video, i) => {
          const { key } = video;
          return (
            <iframe
              key={i}
              style={key ? { display: "block" } : { display: "none" }}
              src={youtubeUrl + key}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        })
      ) : (
        <p style={{ color: "#000" }}>Please Wait</p>
      )}
    </div>
  );
};

export default Trailer;
