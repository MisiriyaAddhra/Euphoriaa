import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Feeddata from "./Feeddata";

const Feedback = () => {

  const feedSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <FeedbackContainer>
      <FeedbackHeader>
        <Block />
        <FeedbackTitle>Feedback</FeedbackTitle>
      </FeedbackHeader>
      <ProductsSliderWrapper>
        <Slider {...feedSliderSettings}>
          {Feeddata.map((item, index) => (
            <FeedCard key={index}>
              <Feed>
                <FeedImageContainer>
                  <Profile>
                    <ProfileImage src={item.profile} alt={`${item.name}'s profile`} />
                  </Profile>
                  <Review>
                    <ReviewImage src={item.review} alt={`${item.name}'s review`} />
                  </Review>
                </FeedImageContainer>
                <FeedInfo>
                  <FeedbackName>{item.name}</FeedbackName>
                  <FeedbackDescription>{item.description}</FeedbackDescription>
                </FeedInfo>
              </Feed>
            </FeedCard>
          ))}
        </Slider>
      </ProductsSliderWrapper>
    </FeedbackContainer>
  );
};

const Block = styled.span`
  background: #8A33FD;
  width: 5px;
  height: 3vh;
  border-radius: 5px;
`;

const ProductsSliderWrapper = styled.div`
  position: relative;

  .slick-dots {
    margin: 0px;
  }

  .slick-prev, .slick-next {
    display: none !important;
  }
`;

const Profile = styled.div`
`;

const ProfileImage = styled.img``;

const Review = styled.div``;

const ReviewImage = styled.img``;

const FeedbackTitle = styled.h1`
  letter-spacing: 3px;
  font-size: 1.5rem;
  margin:0;
`;

const FeedbackName = styled.h2`
  color: #3C4242;
`;

const FeedbackDescription = styled.p`
  font-size: 10px;
`;

const FeedbackContainer = styled.div`
  padding: 0% 3% 10% ;

      @media (max-width: 480px) {
        padding: 12% 3%;
}
`;

const FeedbackHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom:3%;
`;

const Feed = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 82%;
  padding: 5%;
  height: 28vh;

  @media (max-width: 1440px) {
    padding: 5% 5% 7% ;
}
  @media (max-width: 1440px) {
    padding-bottom: 11% ;
} 
  @media (max-width: 1080px) {
      padding-bottom: 17% ;
}
  @media (max-width: 980px) {
      padding-bottom: 12% ;
}
  @media (max-width: 768px) {
      padding: 4% ;
     margin:0 auto;
}
  @media (max-width: 540px) {
      padding: 4% 4% 8% ;
}

`;

const FeedCard = styled.div``;

const FeedImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FeedInfo = styled.div``;

export default Feedback;
