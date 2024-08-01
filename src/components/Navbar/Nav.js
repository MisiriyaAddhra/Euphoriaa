import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { FaBars, FaTimes } from "react-icons/fa";
import UserDropdown from '../Home/UserDropdown';
import logo from "../../assets/Logo.svg";

function Navigation({ username, handleLogout, wishlistSize, cartSize, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };


  return (
    <Nav>
      <Left>
        <Logo src={logo} alt="Logo" />
      </Left>
      <Middle>
        <MenuButton onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <DesktopNavList>
          <NavItem><StyledLink to="/">Shop</StyledLink></NavItem>
          <NavItem><StyledLink to="/women">Women</StyledLink></NavItem>
          <NavItem><StyledLink to="/men">Men</StyledLink></NavItem>
          <NavItem><StyledLink to="/combos">Combos</StyledLink></NavItem>
          <NavItem><StyledLink to="/joggers">Joggers</StyledLink></NavItem>
        </DesktopNavList>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Middle>
      <Right>
        <IconList>
          <IconWrapper>
            <UserDropdown username={username} handleLogout={handleLogout} />
          </IconWrapper>
          <Link to="/wishlist">
            <IconWrapper>
              <GoHeart />
              {wishlistSize > 0 && <Count>{wishlistSize}</Count>}
            </IconWrapper>
          </Link>
          <Link to="/cart">
            <IconWrapper>
              <CiShoppingCart />
              {cartSize > 0 && <Count>{cartSize}</Count>}
            </IconWrapper>
          </Link>
        </IconList>
      </Right>
      <MenuBar open={menuOpen}>
        <MobileNavList>
          <NavItem><StyledLink to="/" onClick={toggleMenu}>Shop</StyledLink></NavItem>
          <NavItem><StyledLink to="/women" onClick={toggleMenu}>Women</StyledLink></NavItem>
          <NavItem><StyledLink to="/men" onClick={toggleMenu}>Men</StyledLink></NavItem>
          <NavItem><StyledLink to="/combos" onClick={toggleMenu}>Combos</StyledLink></NavItem>
          <NavItem><StyledLink to="/joggers" onClick={toggleMenu}>Joggers</StyledLink></NavItem>
        </MobileNavList>
      </MenuBar>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  position: relative;

  @media (max-width: 1280px) {
    padding: 1rem 3rem;
  }

 @media (max-width: 640px) {
    padding: 1rem 1.5rem;
}
    @media (max-width: 540px) {
        padding: 1rem;
}
    @media (max-width: 480px) {
        flex-wrap:wrap;
}
`;

const Left = styled.a`
cursor:pointer;
`;

const Logo = styled.img`
  max-height: 40px;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

    @media (max-width: 540px) {
        gap: 1rem;
}
    @media (max-width: 480px) {
        order:11;
        width:100%;
        margin-top:25px;
}  
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  @media (max-width: 980px) {
    display: block;
  }
`;

const MenuBar = styled.div`
  display: none;
  @media (max-width: 980px) {
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
  }
`;

const DesktopNavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 4rem;
  padding: 0;
  margin: 0;
    @media (max-width: 1280px) {
    gap: 2rem;
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  color: #807D7E;
  &:hover {
    color: #000;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #F6F6F6;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  &::placeholder {
    color: #807D7E;
  }

    @media (max-width: 768px) {
    padding: 0.5rem 0.3rem;
}
    @media (max-width: 480px) {
        padding: 0.5rem 4rem;
}
`;

const Right = styled.div``;

const IconList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 3rem;
  padding: 0;
  margin: 0;
  @media (max-width: 1280px) {
    gap: 1rem;
  }
`;

const IconWrapper = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  border: 1px solid #F6F6F6;
  padding: 5px 8px;
  border-radius: 8px;
  background-color: #F6F6F6;
  position: relative;
`;

const Count = styled.span`
  position: absolute;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.7rem;
  top: -5px;
  right: -5px;
`;

const UserMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default Navigation;
