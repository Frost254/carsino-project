import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Box, Button, Error, FormField, Input, Label, Textarea } from "./styles";

function NewCar({ user }) {
  const [name, setName] = useState("My New Car");
  const [image_url, setImageUrl] = useState("https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  const [description, setDescription] = useState("This car goes from 0 to 60 in 6 seconds. It is still in a mint condition. ");
  const [rating, setRating] = useState("0")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image_url,
        description,
        rating
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Car</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="image_url">Enter the image url</Label>
            <Input
              type="text"
              id="image_url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="rating">Enter your rating: </Label>
            <Input
              type="text"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Car"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <Box>
          <h1>{name}</h1>
          <img src={image_url} alt="car"/>
          <p>
            This user gave it {rating} thumbs up!
          <em>: {description}</em>
            &nbsp;·&nbsp;
          <cite>By {user.username}</cite>
          </p>
          <Button color="primary" type="delete">
            Delete Car
          </Button>
          <Button color="primary" type="submit">
            Add Car Rating
          </Button>
        </Box>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewCar;
