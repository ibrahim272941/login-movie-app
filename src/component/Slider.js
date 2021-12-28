import React from "react";
import Carousel from "react-bootstrap/Carousel";
const IMG_API = "https://image.tmdb.org/t/p/original";
const Slider = ({ movie }) => {
  console.log(movie);
  return (
    <Carousel className="carousel" fade autoPlay={true} interval={2000}>
      {movie.map((img, i) => (
        <Carousel.Item className="d-flex justify-content-center slider" key={i}>
          <img
            style={{ height: "30rem", width: "60rem", alignItems: "center" }}
            src={IMG_API + img.backdrop_path}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{img.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
