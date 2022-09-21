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

  // const handleDragStart = (e) => e.preventDefault();

  const Imgdata = [
    {
      id: 1,
      img: "/assets/Carousel/1.jpg",
      money: "$488,000",
      description1: "1400 Mission St #1508,",
      description2: "San Francisco, CA 94103",
      sub: "BOB WALKER, GM GREEN REAL ESTATE, INC.",
    },
    {
      id: 2,
      img: "/assets/Carousel/2.jpg",
      money: "$1,799,000",
      description1: "194 28th St,",
      description2: "San Francisco, CA 94131",
      sub: "TERRENCE MCCARTHY, W REAL ESTATE",
    },
    {
      id: 3,
      img: "/assets/Carousel/3.jpg",
      money: "$1,695,000",
      description1: "400 Beale St #2103,",
      description2: "San Francisco, CA 94105",
      sub: "JOSHUA A. LAWRENCE, COMPASS",
    },
    {
      id: 4,
      img: "/assets/Carousel/4.jpg",
      money: "$749,000",
      description1: "294 Shipley St #1,",
      description2: "San Francisco, CA 94107",
      sub: "JANE E. HOPKINS, MAXREAL",
    },
    {
      id: 5,
      img: "/assets/Carousel/5.jpg",
      money: "$1,195,000",
      description1: "304 6th St #301,",
      description2: "San Francisco, CA 94103",
      sub: "PAUL HWANG, SKYBOX REALTY",
    },
    {
      id: 6,
      img: "/assets/Carousel/6.jpg",
      money: "$10,680,000",
      description1: "825 Bush St,",
      description2: "San Francisco, CA 94108",
      sub: "JOSE C. YEE, DCP REALTY",
    },
    {
      id: 7,
      img: "/assets/Carousel/7.jpg",
      money: "$1,395,000",
      description1: "570 Page St #7,",
      description2: "San Francisco, CA 94117",
      sub: "TIMOTHY G. FONG, COMPASS",
    },
    {
      id: 8,
      img: "/assets/Carousel/8.jpg",
      money: "$3,900,000",
      description1: "1949-1953 Hayes St,",
      description2: "San Francisco, CA 94117",
      sub: "TERRENCE MCCARTHY, W REAL ESTATE",
    },
    {
      id: 9,
      img: "/assets/Carousel/9.jpg",
      money: "$3,750,000",
      description1: "2563 Clay,",
      description2: "San Francisco, CA 94115",
      sub: "JANE E. HOPKINS, MAXREAL",
    },
  ];

  const Imgdate = Imgdata.map((Imgdata) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <img src={Imgdata.img} alt="#" />
          <h4>{Imgdata.money}</h4>
          <p>{Imgdata.description1}</p>
          <p>{Imgdata.description2}</p>
          <p className="sub">{Imgdata.sub}</p>
        </ItemsWrap>
      </ItemsContain>
    );
  });

  // const items = images.map((image) => {
  //   return (
  //     <ItemsContain>
  //       <ItemsWrap>
  //         <img src={image} alt="" />
  //       </ItemsWrap>
  //     </ItemsContain>
  //   );
  // });

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoWidth
        autoPlay
        autoPlayInterval={2000}
        items={Imgdate}
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
  width: 280px;
  height: 100%;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 260px;
  height: 100%;

  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  h4 {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    text-align: left;
    font-size: 18px;
  }

  .sub {
    border-top: 1px solid gray;
    font-size: 6px;
  }
`;
