import React, { useEffect, useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../Data";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="s-container">
      <div className="arrow arrow-left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <div
        className="slide-wrapper"
        style={{
          transform: `translateX(${-slideIndex * 100}vw)`,
          transition: "transform 3s ease-in-out",
        }}
      >
        {sliderItems.map((item, index) => (
          <div
            className="slider"
            style={{ background: `#${item.bg}` }}
            key={index}
          >
            <div className="img-container">
              <img
                src={item.img}
                alt={item.title}
                style={{
                  height: "90%",
                  objectFit: "cover",
                  ...(index === 1 || index === 2 ? { height: "90%" } : {}),
                }}
              />
            </div>
            <div
              className="info-container"
              style={{
                height: "80%",
                objectFit: "cover",
                ...(index === 1 || index === 2
                  ? { marginTop: "50px", marginLeft: "50px" }
                  : {}),
              }}
            >
              <div className="title">
                <h1>{item.title}</h1>
              </div>
              <div className="desc">{item.desc} </div>
              <Link to={"/Products"}>
                <button type="slide-button">SHOW NOW</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow arrow-right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Slider;
