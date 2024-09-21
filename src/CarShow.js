import "./CarShow.css";
import { useState } from "react";
import sedan from "./images/1.svg";
import suv from "./images/3.svg";
import truck from "./images/5.svg";
import convertible from "./images/g.svg";
import hatchback from "./images/a.svg";
import coupe from "./images/b.svg";
import heart from "./images/heart.svg";

const svgMap = {
  sedan,
  suv,
  truck,
  convertible,
  hatchback,
  coupe,
};

function CarShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="car-show">
      <img className="car" alt="car" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        onClick={handleClick}
        style={{ width: 10 + 10 * clicks + 'px' }}
      />
    </div>
  );
}

export default CarShow;
