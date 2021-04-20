import React from "react";
import { Container } from "reactstrap";
import AnimalGallery from "./components/animal_gallery";
import Banner from "./components/banner";

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <Banner />
        <AnimalGallery />
      </Container>
    </div>
  );
};

export default App;
