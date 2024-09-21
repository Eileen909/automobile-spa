import "./App.css";
import CarShow from "./CarShow";
import { useState } from "react";

function getRandomCar() {
  let cars = ['sedan', 'suv', 'truck', 'convertible', 'hatchback', 'coupe'];
  return cars[Math.floor(Math.random() * cars.length)];
}

function App() {
  const [cars, setCars] = useState([]);
  
  const handleClick = () => {
    setCars([...cars, getRandomCar()]);
  };

  const renderedCars = cars.map((car, index) => {
    return <CarShow type={car} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Car</button>
      <div className="car-list">{renderedCars}</div>
    </div>
  );
}

export default App;
