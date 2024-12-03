import React from 'react';
import CardsList from './Cards';
import './CardMain.css'; // Ensure the CSS file is properly imported

function CardMain() {
  return (
    <div className="cardmain-container">
      <h2 className="cardmain-h2">Elevate Your Web Presence with CertPing</h2>
      <p className="cardmain-p">Discover how our powerful features ensure your websites stay secure, reliable, and high-performing.</p>
      <CardsList />
    </div>
  );
}

export default CardMain;

