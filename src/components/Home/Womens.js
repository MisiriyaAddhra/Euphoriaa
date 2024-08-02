import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowright from '../../assets/arrow-right.svg'; // Adjust the path as needed

const Womens = ({ searchQuery }) => {
    const [womensProducts, setWomensProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
          womensProducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, [searchQuery, womensProducts]);

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const allProducts = await response.json();
            const womenClothing = allProducts.filter(product => product.category === "women's clothing");
            setWomensProducts(womenClothing);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <WomensSession>
            <WomensTitle>
                <Block />
                <Category>Category For Women</Category>
            </WomensTitle>
            <WomensProducts>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id}>
                        <ProductImageContainer>
                            <ProductImage src={product.image} alt={product.title} />
                        </ProductImageContainer>
                        <ProductInfo>
                            <ProductTitle>{product.title.substring(0, 20)}...</ProductTitle>
                            <StyledLink to={`/product/${product.id}`}>
                                <ProductExplore href='#'>Explore Now <img src={arrowright} alt="Explore" /></ProductExplore>
                            </StyledLink>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </WomensProducts>
        </WomensSession>
    );
};

const WomensSession = styled.div`
    padding: 3%;
`;

const WomensTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom:3%;
`;

const Block = styled.span`
    background: #8A33FD;
    width: 5px;
    height: 3vh;
    border-radius: 5px;
`;

const Category = styled.h1`
    letter-spacing: 3px;
    font-size: 1.5rem;
    margin:0;
`;

const WomensProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ProductCard = styled.div`
  position: relative;
  width: calc(25% - 10px);
  
  @media (max-width: 1024px) {
    width: calc(33.33% - 13.33px);
  }
  
  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProductImageContainer = styled.div`
    border: 1px solid #ddd;
     border-radius: 8px;
     overflow: hidden;
     height: 58vh;
     display: flex;
     align-items: center;
     justify-content: center;
     margin-top:10px;
     width: 83%;
     padding:5%;

@media (max-width: 1280px) {
    height:50vh;
}
  @media (max-width: 980px) {
    height: 43vh;
  }
    @media (max-width: 768px) {
    height:54vh;     
 }
    @media (max-width: 640px) {
     height:40vh;     
 }
   @media (max-width: 540px) {
     height:33vh;     
 }
   @media (max-width: 480px) {
     height:73vh;     
 }
`;
const ProductImage = styled.img`
    width: 100%;
    display: block;
`;

const ProductInfo = styled.div`
    padding: 10px 25px;
`;

const ProductTitle = styled.h3`
    margin: 0;
    font-size: 0.9em;
    color: #333;
`;

const ProductExplore = styled.a`
    text-decoration: none;
    color: #7F7F7F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    &:hover {
        color: #000;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Womens;
