import React from "react";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";

function CarContainer() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
    fetch("/cars")
      .then((r) => r.json())
      .then(setCars);
    }, []);

  const carCards = cars.map((car) => (
    <CarCard
      key={car.id}
      car={car}
    />
  ));

  return <div id="toy-collection">{carCards}</div>;
}

export default CarContainer;
