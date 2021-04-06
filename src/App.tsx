import React from "react";
import AnimalGallery from "./components/animal_gallery";
import Banner from "./components/banner";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner />
      <AnimalGallery />
    </div>
  );
};

export default App;
