// src/components/FloatingMenu.js
import React from 'react';
import './FloatingMenu.css';

const FloatingMenu = () => {
  return (
    <div className="floating-menu">
      <ul>
        <li><a href="#media">Media</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#merch">Merch</a></li>
        <li><a href="#rewards">Rewards</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p className="swipe">Swipe up to continue</p>
    </div>
  );
};

export default FloatingMenu;
