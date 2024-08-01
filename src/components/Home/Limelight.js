import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/arrow-right.svg";
import { GoHeart } from "react-icons/go";

const Limelight = ({ toggleWishlist, wishlist }) => {

    const isInWishlist = (productId) => {
        return wishlist.some(item => item.id === productId);
    };

    const [products, setProducts] = useState([]);
    const productsSlider = useRef(null);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const allProducts = await response.json();
            const filteredProducts = allProducts.filter(product =>
                product.category === "men's clothing" || product.category === "women's clothing"
            );
            setProducts(filteredProducts);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const CustomProductPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <ProductArrowLeft onClick={onClick} position="left">
                <ArrowIcon><img src={arrowleft} alt="Previous" /></ArrowIcon>
            </ProductArrowLeft>
        );
    };

    const CustomProductNextArrow = (props) => {
        const { onClick } = props;
        return (
            <ProductArrowRight onClick={onClick} position="right">
                <ArrowIcon><img src={arrowright} alt="Next" /></ArrowIcon>
            </ProductArrowRight>
        );
    };

    const productSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        draggable: false,
        prevArrow: <CustomProductPrevArrow />,
        nextArrow: <CustomProductNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <LimeContainer>
            <Limelights>
                <Block />
                <LimeTitle>In The Limelight</LimeTitle>
            </Limelights>
            <ProductsSliderWrapper>
                <Slider ref={productsSlider} {...productSliderSettings}>
                    {products.map(item => (
                        <ProductCard key={item.id}>
                            <ProductImageContainer>
                                <LikeButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleWishlist(item);
                                    }}
                                    isLiked={isInWishlist(item.id)}
                                >
                                    <ProductLike />
                                </LikeButton>
                                <StyledLink to={`/product/${item.id}`}>
                                    <ProductImage src={item.image} alt={item.title} />
                                </StyledLink>
                            </ProductImageContainer>
                            <ProductInfo>
                                <StyledLink to={`/product/${item.id}`}>
                                    <ProductTitle>{item.title.substring(0, 20)}...</ProductTitle>
                                    <ProductPrice>${item.price}</ProductPrice>
                                </StyledLink>
                            </ProductInfo>
                        </ProductCard>
                    ))}
                </Slider>
            </ProductsSliderWrapper>
        </LimeContainer>
    );
};

const LimeContainer = styled.div`
    padding: 3% 3% 0;
`;

const Limelights = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const LimeTitle = styled.h1`
    letter-spacing: 3px;
    font-size: 1.5rem;
`;

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


const ProductArrowLeft = styled.div`
position: absolute;
top: 50%;
${props => props.position}: -40px;
transform: translateY(-50%);
width: 40px;
height: 40px;
background-color: #fff;
border: 1px solid #ddd;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
z-index: 1;
transition: all 0.3s ease;

&:hover {
    background-color: #f0f0f0;
}

    @media (max-width: 480px) {
        top: 105%;
        left: 35%;

}
`;

const ProductArrowRight = styled.div`
position: absolute;
top: 50%;
${props => props.position}: -40px;
transform: translateY(-50%);
width: 40px;
height: 40px;
background-color: #fff;
border: 1px solid #ddd;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
z-index: 1;
transition: all 0.3s ease;

&:hover {
    background-color: #f0f0f0;
}

    @media (max-width: 480px) {
        top: 105%;
        right: 35%;

}
`;

const ArrowIcon = styled.span`
    font-size: 20px;
    color: #333;
`;

const ProductCard = styled.div`
    position: relative;
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
width: 82%;
padding: 5%;
width: 80%;

    @media (max-width: 540px) {
        height:40vh;
}
    @media (max-width: 360px) {
        height:60vh;
}
`

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

const ProductPrice = styled.h5`
    border: 1px solid #F6F6F6;
    background: #F6F6F6;
    width: 15%;
    padding: 2% 8%;
    border-radius: 5px;
`;

const ProductLike = styled(GoHeart)`
    font-size: 20px;
`;

const LikeButton = styled.button`
    background: none;
    border: 1px solid #F6F6F6;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 35px;
    z-index: 1;
    padding: 4px 6px;

    svg {
        fill: ${props => props.isLiked ? 'red' : 'gray'};
        transition: fill 0.3s ease;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Limelight;
