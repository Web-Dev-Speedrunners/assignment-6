import React from "react";
import { Container } from "reactstrap";
import AnimalGallery from "./components/animal_gallery";
import AnimalCard from "./components/animal_card";
import Banner from "./components/banner";

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <Banner />
        <AnimalCard />
        <AnimalGallery />
      </Container>
    </div>
  );
};

export default App;
