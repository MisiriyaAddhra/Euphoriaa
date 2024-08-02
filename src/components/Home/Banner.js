import React from 'react';
import styled from 'styled-components';
import fashion from "../../assets/bg-5.jpg";



const Banner = () => {
  return (
    <FashionBanner>
    <Content>
      <FashionTitle>we made your everyday fashion better</FashionTitle>
      <Text>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</Text>
      <Button>Shop Now</Button>
    </Content>
    <ImageContainer>
      <FashionImage src={fashion} alt="Fashion Banner" />
    </ImageContainer>
  </FashionBanner>
  );
};


const FashionBanner = styled.div`
display: flex;
padding: 0 3% ;

     @media (max-width: 480px) {
    //  padding: 12% 0 0;
}
`

  const Content = styled.div`
width: 40%;
padding: 9% 6% 0 10%;
background: url(${require('../../assets/bg-4.jpg')}) top/cover no-repeat;

    @media (max-width: 1280px) {
    padding: 3% 6% 0 5%;
}
    @media (max-width: 980px) {
    padding: 0% 6% 0 5%;
}
    @media (max-width: 640px) {
    width: 100%;
    min-height: 25vh;
    border-radius: 20px;
}
    @media (max-width: 540px) {
    min-height:30vh;
}

    @media (max-width: 480px) {
    padding:8% 5% 0;
}

`

  const FashionTitle = styled.h1`
font-size: 3rem;
margin-bottom: 15px;
text-transform: capitalize;
color: #fff;

    @media (max-width: 1280px) {
      font-size: 2rem;
}
    @media (max-width: 980px) {
      font-size: 1.5rem;
}
    @media (max-width: 768px) {
      font-size: 1.2rem;
}
     @media (max-width: 480px) {
      margin:0;
}
`

  const Text = styled.p`
font-size: 1.2rem;
margin-bottom: 20px;
color: #fff;

    @media (max-width: 980px) {
      font-size: 1rem;
}
    @media (max-width: 768px) {
      font-size: 13px;
}
`

  const ImageContainer = styled.div`
width: 50%;

    @media (max-width: 640px) {
      display:none
}
`

  const FashionImage = styled.img`
width: 100%;
display: block;
`
const Button = styled.button`
padding: 15px 55px;
background-color: #fff;
color: #000;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 1rem;

&:hover {
  background-color: lightgrey;
}

    @media (max-width: 980px) {
      padding: 10px 55px;
}
    @media (max-width: 768px) {
    padding: 3px 45px;  
}
`

export default Banner;
