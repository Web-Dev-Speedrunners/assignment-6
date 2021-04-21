import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

// types for AnimalCard props
interface IAnimalCard {
  fact: string;
  image: string;
}

// it's a card with animals
const AnimalCard = ({ fact, image }: IAnimalCard) => (
  <Card>
    <CardImg top src={image} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">Fact:</CardTitle>
      <CardText>{fact}</CardText>
      <Button>Tweet</Button>
    </CardBody>
  </Card>
);
export default AnimalCard;
