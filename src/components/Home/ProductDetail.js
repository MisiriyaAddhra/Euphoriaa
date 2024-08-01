import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import color1 from "../../assets/Ellipse 6.png"
import color2 from "../../assets/Ellipse 6(1).png"
import color3 from "../../assets/Ellipse 6(2).png"
import color4 from "../../assets/Ellipse 6(1).png"
import star from "../../assets/Frame.png"
import { MdOutlineComment } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const ProductDetail = ({ toggleWishlist, toggleCart, wishlist, cart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [activeSection, setActiveSection] = useState("description");


  const handleToggleCart = () => {
    if (product) {
      toggleCart(product);
      setAddedToCart(!addedToCart);
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      toggleWishlist(product);
      setAddedToWishlist(!addedToWishlist);
    }
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <MainContainer>
      <Container>
        <ImgContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ImgContainer>
        <ProductInfo>
          <Title>{product.title}</Title>
          <Review>
            <Rating><img src={star} alt="star" />{product.rating.rate}</Rating>
            <Comment><MdOutlineComment />{product.rating.count}</Comment>
          </Review>
          <SizeBox>
            <SelectSize>Select Size</SelectSize>
            <SizeGuide>Size Guide <FaArrowRight /></SizeGuide>
          </SizeBox>
          <Size>
            <SizeItem>XS</SizeItem>
            <SizeItem>S</SizeItem>
            <SizeItem>M</SizeItem>
            <SizeItem>L</SizeItem>
            <SizeItem>XL</SizeItem>
          </Size>
          <ColorBox>
            <SelectColor>Colours Available</SelectColor>
            <Colors>
              <ColorItem><img src={color1} alt="color1" /></ColorItem>
              <ColorItem><img src={color2} alt="color2" /></ColorItem>
              <ColorItem><img src={color3} alt="color3" /></ColorItem>
              <ColorItem><img src={color4} alt="color4" /></ColorItem>
            </Colors>
          </ColorBox>
          <Buttons>
            <Button onClick={handleToggleCart}>
              {addedToCart ? 'REMOVE FROM BAG' : 'ADD TO BAG'}
            </Button>
            <Button onClick={handleToggleWishlist}>
              {addedToWishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
            </Button>
            <Price>${product.price}</Price>
          </Buttons>
          <ServiceBox>
            <ServiceItem><IconBox><MdOutlinePayment /></IconBox>Secure Payment</ServiceItem>
            <ServiceItem><IconBox><IoShirtOutline /></IconBox>Size & Fit</ServiceItem>
            <ServiceItem><IconBox><CiDeliveryTruck /></IconBox>Free Shipping</ServiceItem>
            <ServiceItem><IconBox><IoIosGitCompare /></IconBox>FreeShipping & Returns</ServiceItem>
          </ServiceBox>
        </ProductInfo>
      </Container>
      <Product>
        <Block />
        <ProductTitle>Product Description</ProductTitle>
      </Product>
      <BottomDetails>
        <BottomDetailsLeft>
          <BottomDetailsTop>
            <TabButton
              className={activeSection === "description" ? "active" : ""}
              onClick={() => setActiveSection("description")}
            >
              Description
            </TabButton>
            <TabButton
              className={activeSection === "review" ? "active" : ""}
              onClick={() => setActiveSection("review")}
            >
              User Comments
            </TabButton>
          </BottomDetailsTop>
          <BottomDetailsBottom>
            {activeSection === "description" && (
              <ContentParagraph>{product.description}</ContentParagraph>
            )}
            {activeSection === "review" && (
              <ContentParagraph>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</ContentParagraph>
            )}
          </BottomDetailsBottom>
        </BottomDetailsLeft>
        <BottomDetailsRight>
          <ProductFeatures>
            <FeatureItem>
              <FeatureTitle>Fabric</FeatureTitle>
              <FeatureDescription>Bio-washed Cotton</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Pattern</FeatureTitle>
              <FeatureDescription>Printed</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Fit</FeatureTitle>
              <FeatureDescription>Regular-Fit</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Category</FeatureTitle>
              <FeatureDescription>{product.category}</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>neck</FeatureTitle>
              <FeatureDescription>Round-Neck</FeatureDescription>
            </FeatureItem>
            <FeatureItem>
              <FeatureTitle>Sleeve</FeatureTitle>
              <FeatureDescription>Half-sleevs</FeatureDescription>
            </FeatureItem>
          </ProductFeatures>
        </BottomDetailsRight>
      </BottomDetails>
    </MainContainer>
  );
};

const MainContainer = styled.div`
padding: 20px;
max-width: 1200px;
margin: 0 auto; `

const Container = styled.div`
display: flex;
align-items:center;

 @media (max-width: 640px) {
  flex-direction: column;
  }
`
const ImgContainer = styled.div`
  width: 50%;
  padding: 5%;


   @media (max-width: 980px) {
    width: 37%;
}

  @media (max-width: 640px) {
    margin: 0 auto;
  }
`;


const ProductImage = styled.img`
  display:block;
  width:100%;
`

const ProductInfo = styled.div`
width: 50%;
padding-left: 20px;

 @media (max-width: 640px) {
    width:100%;
  }
`

const Title = styled.h1`
font-size: 24px;
margin-bottom: 25px;
`

const Review = styled.div`
display: flex;
align-items: center;
gap:50px;
margin-bottom: 30px;
`

const Rating = styled.span`
display: flex;
align-items: center;
gap:20px;
`
const Comment = styled.span`
display: flex;
align-items: center;
gap:20px;
`


const SizeBox = styled.div`
display: flex;
gap:30px;
margin-bottom: 15px;
`

const SelectSize = styled.span`
font-weight: bold;
`

const SizeGuide = styled.span`
display: flex;
align-items: center;
gap:20px;
cursor: pointer;
color:#807D7E;
`

const Size = styled.div`
display: flex;
margin-bottom: 30px;
`

const SizeItem = styled.span`
border: 1px solid #807D7E;
padding: 5px 10px;
margin-right: 10px;
color:#807D7E;
cursor: pointer;
border-radius:10px;
font-size:12px;
font-weight:bold;

&:hover {
  background-color: #000;
  color:#fff;
}
`

const ColorBox = styled.div`
margin-bottom: 20px;
`

const SelectColor = styled.div`
font-weight: bold;
margin-bottom: 15px;
`

const Colors = styled.div`
display: flex;
`

const ColorItem = styled.span`
margin-right: 10px;
cursor: pointer;
`

const Buttons = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
`

const Button = styled.button`
background-color: #8A33FD;
display: flex;
align-items: center;
color: white;
padding: 10px 20px;
border: none;
gap:20px;
cursor: pointer;
border-radius:10px;
margin-right: 25px;

&:hover {
  background-color: #333;
}
   @media (max-width: 480px) {
   margin-right: 5px;
   font-size:10px;
`

const Price = styled.span`
padding: 5px 20px;
border: 1px solid #000;
cursor: pointer;
border-radius:10px;
font-weight:bold;
`

const ServiceBox = styled.ul`
list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
   border-top: 1px solid #BEBCBD ;
    padding: 30px 0;

`

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  width:50%;
  gap:20px;
  margin-bottom:20px;
 
 
`
const IconBox = styled.span`
display:block;
font-size:20px;
color:#3C4242;
border:none;
border-radius:50%;
background:#F6F6F6;
padding:8px 10px;
`

const BottomDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap:40px;

 @media (max-width: 768px) {
    flex-direction:column;
  }
  
`;

const BottomDetailsLeft = styled.div`
width:50%;

 @media (max-width: 768px) {
    width:100%;
}
`
const BottomDetailsRight = styled.div`
width:50%;

@media (max-width: 768px) {
width:100%;
}
`
const BottomDetailsTop = styled.div`
  display: flex;
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 15px 30px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  color:#807D7E;
  

  &.active {
    color: #000;
    border-bottom-color: #000;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

const BottomDetailsBottom = styled.div`
  padding: 20px 0;
`;

const ContentParagraph = styled.p`
  font-size: 12px;
  line-height: 1.6;
  color: #333;
`;

const Product = styled.div`
margin-top: 30px;
display: flex;
gap: 10px;
align-items: center;
`

const Block = styled.span`
background: #8A33FD;
width: 5px;
height: 3vh;
border-radius: 5px;
`

const ProductTitle = styled.h1`
letter-spacing: 1px;
font-size: 1.5rem;
`

const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  background:#F6F6F6;
  padding: 3% 0% 3% 13%;
  border-radius:20px;
`;

const FeatureItem = styled.div`
  flex: 1 1 calc(33.333% - 16px); /* Adjust the percentage and gap to fit your layout */
  box-sizing: border-box;
`;

const FeatureTitle = styled.h4`
  color:#807D7E;
`;

const FeatureDescription = styled.h5`
  color: #3C4242;
`

export default ProductDetail;