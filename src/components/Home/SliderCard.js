import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'
import { ReactComponent as LeftArrow } from '../../assets/left-arrow-bold.svg'
import { ReactComponent as RightArrow } from '../../assets/right-arrow-bold.svg'


const SlideCard = () => {
  const mainSlider = useRef(null);
 
  const goToPrev = () => {
    mainSlider.current.slickPrev();
  };

  const goToNext = () => {
    mainSlider.current.slickNext();
  };

  const mainSliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    appendDots: (dots) => {
      return <ul>{dots}</ul>
    },
  }

  return (
    <Container>
      <SliderWrapper>
        <Slider ref={mainSlider} {...mainSliderSettings}>
          {Sdata.map((value, index) => (
            <Box key={index}>
              <Left>
                <Type>{value.cats}</Type>
                <Title>{value.title}</Title>
                <Description>{value.desc}</Description>
                <Button>Shop Now</Button>
              </Left>
              <Right>
                <Image src={value.cover} alt='' />
              </Right>
            </Box>
          ))}
        </Slider>
        <CustomPrevArrow onClick={goToPrev}>
          <LeftArrow />
        </CustomPrevArrow>
        <CustomNextArrow onClick={goToNext}>
          <RightArrow />
        </CustomNextArrow>
      </SliderWrapper>
    </Container>
  )

}


const Container = styled.div``



const SliderWrapper = styled.div`
position: relative;

.slick-dots {
margin: 0px;
}

.slick-prev, .slick-next {
display: none !important;
}
`
const CustomArrow = styled.div`
position: absolute;
top: 50%;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
z-index: 1;

svg {
width: 50px;
height: 50px;
fill: white;
}

  @media (max-width: 640px) {
    svg {
      width: 30px;
      height: 30px;
  }

  @media (max-width: 480px) {
    svg {
      width: 20px;
      height: 20px;
  }
  top: 40%;
      
}
`

const CustomPrevArrow = styled(CustomArrow)`
left: 25px;

  @media (max-width: 480px) {
    left: 10px;
`

const CustomNextArrow = styled(CustomArrow)`
right: 25px;

@media (max-width: 480px) {
  right: 10px;
`

const Box = styled.div`
height: 80vh;
display: flex !important;

    @media (max-width: 768px) {
      height: 65vh;
}
    @media (max-width: 640px) {
      height: 55vh;
}

    @media (max-width: 540px) {
      height: 45vh;
}

    @media (max-width: 480px) {
      height: 30vh;
}

`

const Left = styled.div`
position: absolute;
padding: 20px 150px;
top: 20%;

    @media (max-width: 768px) {
     padding: 20px 100px; 
     top:10%;
}
    @media (max-width: 540px) {
     top:15%;
}
     @media (max-width: 480px) {
     padding: 0 60px;
     top:5%;
}
`

const Right = styled.div`
width: 100%;
height: 135vh;
`

const Title = styled.h1`
font-size: 3rem;
font-weight: bolder;
color: #fff;

    @media (max-width: 640px) {
     margin:0;
     font-size: 2rem;
}

    @media (max-width: 480px) {
     font-size: 1rem;
}
`

const Description = styled.p`
margin: 20px 0;
font-size: 1.2rem;
color: #fff;
font-weight: bold;
`

const Type = styled.p`
margin: 20px 0;
font-size: 1.2rem;
color: #fff;
font-weight: bold;
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

  @media (max-width: 640px) {
    padding: 5px 20px;
}
`

const Image = styled.img`
width: 100%;
object-fit: cover;
`

export default SlideCard

