import React from "react";
import Carousel from "./Carousel";

const Main2 = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mt-24">Explor homes on Trulia</h2>
      <p>
        Take a deep dive and browse homes for sale, original neighborhood
        photos, resident <br /> reviews and local insights to find what is right
        for you.
      </p>
      <Carousel />
      <hr />
    </div>
  );
};

export default Main2;
