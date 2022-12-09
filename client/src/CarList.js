import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "./CarCard";
import styled from "styled-components";
import { Box, Button } from "./styles";

function CarList() {
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

  return (
    <Wrapper>
      {cars.length > 0 ? (
        cars.map((car) => (
          <Car key={car.id}>
            <Box>
              <h2>{car.name}</h2>
              <p>
                <img src={car.image_url} alt="car"/>
                <em>Description: {car.description} minutes</em>
                &nbsp;·&nbsp;
                <cite>By {car.user.username}</cite>
              </p>
              <Button>
                Delete Car
              </Button>
            </Box>
          </Car>
        ))
      ) : (
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

const Car = styled.article`
  margin-bottom: 24px;
`;

export default CarList;
