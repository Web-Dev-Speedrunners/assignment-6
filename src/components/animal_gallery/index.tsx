import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import { FindRandFacts, FindRandImgs } from "../../services";

// two arrays, to array of pairs
const zip = (a: string[], b: string[]) => a.map((k, i) => [k, b[i]]);

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
const AnimalGallery: React.FC = () => {
  const [currentFacts, setCurrentFact] = useState<string[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // update images and facts
  const updateMedia = async () => {
    const facts: string[] = await FindRandFacts(9);
    const images: string[] = await FindRandImgs(9);
    setCurrentImages(images);
    setCurrentFact(facts);
  };

  // load media on startup
  useEffect(() => {
    updateMedia();
  }, []);

  return (
    <div>
      <Card>
        <Row>
          {zip(currentFacts, currentImages).map(([fact, image]) => (
            <Col xs="4">
              <AnimalCard fact={fact} image={image} />
            </Col>
          ))}
        </Row>
      </Card>
      <Card>
        <Button onClick={updateMedia}>Get more pets!</Button>
      </Card>
    </div>
  );
};

export default AnimalGallery;
