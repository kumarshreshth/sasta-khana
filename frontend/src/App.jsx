import React, { useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import RestaurantCard from './component/RestaurantCard';
import MenuCard from './component/MenuCard';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/restaurant"
          element={<RestaurantCard />}
        />
        <Route
          path="/menu"
          element={<MenuCard />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </div>
  );
};

export default App;
