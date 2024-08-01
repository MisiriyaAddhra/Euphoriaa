import React from 'react';
import styled from 'styled-components';
import SlideCard from './SliderCard';
import NewArrival from './NewArrival';
import Card from './Card';
import Banner from './Banner';
import Mens from './Mens';
import Womens from './Womens';
import BrandBox from './BrandsBox';
import Limelight from './Limelight';
import Feedback from './Feedback';

const Home = ({ toggleWishlist, wishlist,searchQuery }) => {
  return (
    <HomeSection>
      <SlideCard />
      <Container>
        <Card />
        <NewArrival searchQuery={searchQuery}/>
        <Banner />
        <Mens searchQuery={searchQuery} />
        <Womens searchQuery={searchQuery} />
        <BrandBox />
        <Limelight toggleWishlist={toggleWishlist} wishlist={wishlist} searchQuery={searchQuery}/>
        <Feedback />
      </Container>
    </HomeSection>
  );
};

const HomeSection = styled.section`
`;

const Container = styled.div`
  max-width: 1300px; 
  margin: 0 auto;
  padding: 0 10px;
  

  @media (max-width: 1440px) {
    padding: 0 55px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export default Home;
