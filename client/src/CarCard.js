import React from "react";
import { Box, Button } from "./styles";
import styled from "styled-components";

function CarCard({ car, onDelete, onUpdate }) {

  function handleDeleteClick() {
    fetch(`/cars/${car.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log(r);
        onDelete(car)
      }
    });
  }

  function handleLikeClick() {
    const updateObj = {
      rating: car.rating + 1,
    };

    fetch(`/cars/${car.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then((updatedCar) => onUpdate(updatedCar));
  }

  return (
    <Car key={car.id}>
            <Box>
              <h2>{car.name}</h2>
              <img src={car.image_url} alt="car"/>
              <p>This user gave it {car.rating} thumbs up</p>
              <p>
                <em>Description: {car.description} </em>
                &nbsp;·&nbsp;
                <cite>By {car.user.username}</cite>
              </p>
              <Button onClick={handleDeleteClick}>
                Delete Car
              </Button>
              <br />
              <br />
              <Button onClick={handleLikeClick}>
                Add Rating to Car
              </Button>
            </Box>
    </Car>
  );
}

const Car = styled.article`
  margin-bottom: 24px;
`;

export default CarCard;
