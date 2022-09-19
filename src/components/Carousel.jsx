import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Carousel = () => {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const handleDragStart = (e) => e.preventDefault();

  const images = [
    "/assets/Carousel/1.jpg",
    "/assets/Carousel/2.jpg",
    "/assets/Carousel/3.jpg",
    "/assets/Carousel/4.jpg",
    "/assets/Carousel/5.jpg",
    "/assets/Carousel/6.jpg",
  ];

  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <img src={image} alt="" />
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        items={items}
        paddingRight={40}
      />
    </Contain>
  );
};
export default Carousel;

const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
