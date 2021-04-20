import React, { useEffect, useState } from "react";
import { Jumbotron } from "reactstrap";
import { FindImage } from "../../services";

const AnimalCard: React.FC = () => {
  const [currentImage, setCurrentImage] = useState("");
  const displayNewImage = async () => {
    const image = await FindImage();
    setCurrentImage(image);
  };

  useEffect(() => {
    displayNewImage();
  }, []);

  return (
    <Jumbotron>
      <h2 className="display-3">Animal Card</h2>
      <p className="lead">{currentImage}</p>
    </Jumbotron>
  );
};

export default AnimalCard;
