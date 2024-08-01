import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Womens from './components/Home/Womens';
import Mens from './components/Home/Mens';
import ProductDetail from './components/Home/ProductDetail';
import Navbar from './components/Navbar/Nav'
import Footer from './components/Footer/Footer';
import LoginComponent from './components/Home/LoginComponent';
import Home from './components/Home/Home';
import Wishlist from "./components/Home/Wishlist";
import Cart from "./components/Home/Cart";


function App() {

  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUsername = localStorage.getItem('username');
    if (savedToken && savedUsername) {
      setToken(savedToken);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = (newToken, newUsername) => {
    setToken(newToken);
    setUsername(newUsername);
    localStorage.setItem('authToken', newToken);
    localStorage.setItem('username', newUsername);
  };

  const handleLogout = () => {
    setToken(null);
    setUsername('');
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
  };


  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const isInWishlist = prevWishlist.some(item => item.id === product.id);
      if (isInWishlist) {
        return prevWishlist.filter(item => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

    const addToWishlist = (item) => {
      setWishlist([...wishlist, item]);
    };

    const handleRemoveItem = (itemId) => {
      setWishlist(wishlist.filter(item => item.id !== itemId));
  };


    const addToCart = (item) => {
      setCart([...cart, item]);
    };

  const toggleCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, remove it
        return prevCart.filter(item => item.id !== product.id);
      } else {
        // If item doesn't exist, add it
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };


  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCart(prevCart => 
        prevCart.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar wishlistSize={wishlist.length} cartSize={cart.length}  username={username}
        handleLogout={handleLogout} onSearch={setSearchQuery}/>
      <Routes>
        <Route path="/" element={<Home toggleWishlist={toggleWishlist} wishlist={wishlist} searchQuery={searchQuery}/>} />
        <Route path="/women" element={<Womens searchQuery={searchQuery}/>} />
        <Route path="/men" element={<Mens searchQuery={searchQuery}/>} />
        <Route path="/wishlist"  element={<Wishlist wishlist={wishlist} onRemoveItem={handleRemoveItem} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />} />
      
        <Route path="/login" element={<LoginComponent token={token} username={username} handleLogin={handleLogin} />}/>
        <Route 
          path="/product/:id" 
          element={
            <ProductDetail 
              toggleWishlist={toggleWishlist}
              toggleCart={toggleCart}
              wishlist={wishlist}
              cart={cart}
            />
          } 
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;