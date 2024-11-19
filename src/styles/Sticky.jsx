import React from 'react';
import '../styles/Sticky.css'; // Ensure your CSS has the correct filename extension

function Sticky() {
  return (
    <div className="sticky-whatsapp">
      <a href="https://wa.me/7594053730" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
}

export default Sticky;
