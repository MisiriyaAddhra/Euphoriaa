import React from "react";
import styled from "styled-components";

const WishlistContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const WishlistHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const WishlistTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-transform: capitalize;
`;

const WishlistItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

const WishlistBox = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    padding: 1rem;

    &:hover {
        transform: translateY(-5px);
    }
`;

const WishlistImage = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    display:block;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const WishlistInfo = styled.div`
`;

const WishlistItemTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const EmptyWishlist = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const RemoveButton = styled.button`
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ff3333;
    }
`;

const Wishlist = ({ wishlist = [],  onRemoveItem }) => {
    return (
        <WishlistContainer>
            <WishlistHeader>
                <WishlistTitle>Your Wishlist Items</WishlistTitle>
            </WishlistHeader>
            <WishlistItems>
                {wishlist.length === 0 ? (
                    <EmptyWishlist>Your wishlist is empty.</EmptyWishlist>
                ) : (
                    wishlist.map((item) => (
                        <WishlistBox key={item.id}>
                            <WishlistImage>
                                <img src={item.image} alt={item.name} />
                            </WishlistImage>
                            <WishlistInfo>
                                <WishlistItemTitle>{item.title}</WishlistItemTitle>
                                <RemoveButton onClick={() => onRemoveItem(item.id)}>
                                    Remove
                                </RemoveButton>
                            </WishlistInfo>
                        </WishlistBox>
                    ))
                )}
            </WishlistItems>
        </WishlistContainer>
    );
};

export default Wishlist;