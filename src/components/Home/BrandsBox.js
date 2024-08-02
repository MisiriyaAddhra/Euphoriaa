import React from 'react'
import styled from 'styled-components'
import nike from "../../assets/nike.jpg"
import hm from "../../assets/H&M.jpg"
import levis from "../../assets/levis.jpg"
import polo from "../../assets/USPA.jpg"
import puma from "../../assets/puma.jpg"

const BrandBox=()=> {
  return (
    <BrandsBox>
          <BrandsBoxTitle>Top Brand Deals</BrandsBoxTitle>
          <BrandDiscount>Up To 60% off on brands</BrandDiscount>
          <BrandsBoxes>
            <BrandsBoxItem>
              <BrandImage src={nike} />
            </BrandsBoxItem>
            <BrandsBoxItem>
              <BrandImage src={hm} />
            </BrandsBoxItem>
            <BrandsBoxItem>
              <BrandImage src={levis} />
            </BrandsBoxItem>
            <BrandsBoxItem>
              <BrandImage src={polo} />
            </BrandsBoxItem>
            <BrandsBoxItem>
              <BrandImage src={puma} />
            </BrandsBoxItem>
          </BrandsBoxes>
        </BrandsBox>

  )
}

const BrandsBox = styled.div`
background:#323232;
padding:5%;
border-radius: 15px;
margin: auto 3% ;

`;

 const BrandsBoxTitle = styled.h1`
 color: #fff;
 font-size: 4rem;
 text-align: center;
 margin-top: 0;

     @media (max-width: 768px) {
        font-size: 3rem;
}

     @media (max-width: 768px) {
        font-size: 2rem;
}
`;

 const BrandDiscount = styled.p`
 color:#fff;
 font-size: 23px;
  text-align: center;
`;

 const BrandsBoxes = styled.ul`
 list-style:none;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 padding:0;
`;

 const BrandsBoxItem = styled.li`
`;

 const BrandImage = styled.img`
height: 7vh;
 border-radius: 6px;
     @media (max-width: 980px) {
        height: 5vh;
}
      @media (max-width: 640px) {
        height: 4vh;
}
     @media (max-width: 480px) {
        height:3vh;
}
`;

export default BrandBox
