import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const CartItems = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1.5rem;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const QuantityButton = styled.button`
  background: #f0f0f0;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e0e0e0;
  }
`;

const QuantityDisplay = styled.span`
  margin: 0 1rem;
  font-size: 1.1rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #ff1a1a;
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  text-align: right;
`;

const TotalPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const CheckoutButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #45a049;
  }
`;

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <CartHeader>Your Shopping Cart</CartHeader>
      <CartItems>
        {cart.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemDetails>
            <QuantityControl>
              <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <FaMinus />
              </QuantityButton>
              <QuantityDisplay>{item.quantity}</QuantityDisplay>
              <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <FaPlus />
              </QuantityButton>
            </QuantityControl>
            <RemoveButton onClick={() => removeItem(item.id)}>
              <FaTrash />
            </RemoveButton>
          </CartItem>
        ))}
      </CartItems>
      <CartSummary>
        <TotalPrice>Total: ${total.toFixed(2)}</TotalPrice>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
};

export default Cart;