import React from 'react'
import styled from 'styled-components'

const Card=() => {
  return (
    <BoxContainer>
          <LeftBox>
            <BoxContent>
              <Span>Low Price</Span>
              <H2>high coziness</H2>
              <Small>upto 50% discount</Small>
              <Explore href="#">Explore items</Explore>
            </BoxContent>
          </LeftBox>
          <RightBox>
            <BoxContent>
              <Span>Low Price</Span>
              <H2>high coziness</H2>
              <Small>upto 50% discount</Small>
              <Explore href="#">Explore items</Explore>
            </BoxContent>
          </RightBox>
        </BoxContainer>
  )
}

  const BoxContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10%;
padding:3%;

    @media (max-width: 768px) {
      gap:5%;
}
    @media (max-width: 640px) {
      flex-direction: column;
      gap:20px;
}

    @media (max-width: 540px) {
      padding-top:10%
}
`

  const LeftBox = styled.div`
width: 50%;
background: url(${require("../../assets/bg-2.jpg")}) Top/cover no-repeat;
height: 40vh;
border-radius: 25px;

    @media (max-width: 980px) {
      height: 30vh;
}
      @media (max-width: 640px) {
      width: 100%;
      }
`

  const RightBox = styled.div`
width: 50%;
background: url(${require('../../assets/bg-3.jpg')}) top/cover no-repeat;
height: 40vh;
border-radius: 25px;
    @media (max-width: 980px) {
      height: 30vh;
}
      @media (max-width: 640px) {
      width: 100%;
      }
`

  const BoxContent = styled.div`
padding: 5% 0 0 10%;
display: flex;
flex-direction: column;
`

  const Span = styled.span`
color: #fff;
font-weight: bold;
`

  const H2 = styled.h2`
color: #fff;
margin: 10px 0 7px;
`

  const Small = styled.small`
color: #fff;
`

  const Explore = styled.a`
color: #fff;
text-decoration: none;
font-weight: bold;
margin-top: 20px;

&:hover {
  text-decoration: underline;
}
`

export default Card