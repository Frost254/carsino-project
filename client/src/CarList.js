import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import styled from "styled-components";
import { Button } from "./styles";

function CarList() {
  const [cars, setCars] = useState([]);

    useEffect(() => {
    fetch("/cars")
      .then((r) => r.json())
      .then(setCars);
    }, []);

  function handleDeleteCar(carToDelete) {
    const updatedCars = cars.filter((car) => car.id !== carToDelete.id);
    setCars(updatedCars);
  }

  function handleUpdateCar(updatedCar) {
    const updatedCars = cars.map((car) =>
      car.id === updatedCar.id ? updatedCar : car
    );
    setCars(updatedCars);
  }

  const carCards = cars.map((car) => (
    <CarCard
      key={car.id}
      car={car}
      onDelete={handleDeleteCar}
      onUpdate={handleUpdateCar}
    />
  ));

  return (
    <Wrapper>
      {cars.length > 0 ? (carCards) : (
        <>
          <h2>No Cars Found</h2>
          <Button as={Link} to="/new">
            Make a New Car
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;


export default CarList;
