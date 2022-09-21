import React from "react";
import Carousel from "./Carousel";

const Main2 = () => {
  return (
    <div className="text-center">
      {/* <h2 className="text-4xl font-bold mt-24">Explor homes on Trulia</h2>
      <p>
        Take a deep dive and browse homes for sale, original neighborhood
        photos, resident <br /> reviews and local insights to find what is right
        for you.
      </p> */}
      <h2 className="text-4xl font-bold my-20 mx-auto md:max-w-[260px]">
        Newly listed homes in San Francisco
      </h2>

      <Carousel />
    </div>
  );
};

export default Main2;
