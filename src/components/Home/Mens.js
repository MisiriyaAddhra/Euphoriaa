import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowright from "../../assets/arrow-right.svg"

const Mens = ({ searchQuery }) => {
    const [mensProducts, setMensProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
          mensProducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, [searchQuery, mensProducts]);

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const allProducts = await response.json();
            const menClothing = allProducts.filter(product => product.category === "men's clothing");
            setMensProducts(menClothing);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <MensSession>
            <MensTitle>
                <Block />
                <Category>Category For Men</Category>
            </MensTitle>
            <MensProducts>
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
            </MensProducts>
        </MensSession>
    );
};

const MensSession = styled.div`
    padding: 3% 3% 0 ;
`;

const MensTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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
`;

const MensProducts = styled.div`
display:flex;
   @media (max-width: 1024px) {
        flex-wrap:wrap;
 } 
  
`;

const ProductCard = styled.div`
    position: relative;
    width: calc(100% / 4 - 10px);

    @media (max-width: 1024px) {
        width: calc(100% / 3 - 10px);
 }   
    @media (max-width: 768px) {
        width: calc(100% / 2 - 10px);
 }
 @media (max-width: 540px) {
      margin-top:0px;  
}
    @media (max-width: 360px) {
        width: calc(100% / 1 - 10px);
 } 
    
`;

const ProductImageContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    margin-top:10px;
    width: 82%;
    padding: 0 5%;

     @media (max-width: 768px) {
         height:55vh;
 }
     @media (max-width: 640px) {
        height:45vh;
 }
     @media (max-width: 540px) {
        height:38vh;
 }

    @media (max-width: 360px) {
        height:60vh;
}
    `
;

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
    @media (max-width: 480px) {
        font-size:13px;
}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Mens;
