import React from "react";

function CarCard({ car }) {
  const { id, name, image_url, description, rating } = car;

  function handleDeleteClick() {
    fetch(`/cars/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log(r);
      }
    });
  }

  function handleLikeClick() {
    const updateObj = {
      rating: car.rating + 1,
    };

    fetch(`/cars/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image_url} alt={name}/>
      <p>{rating} thumbs up </p>
      <button onClick={handleLikeClick}>
        Add Rating {"<3"}
      </button>
      <button  onClick={handleDeleteClick}>
        Delete to Car
      </button>
    </div>
  );
}

export default CarCard;
