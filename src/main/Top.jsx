import React from 'react';
import '../main/Top.css'; // Custom CSS

function Top() {
  const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl,'ggg');
  return (
    <div>
      <h1
        className="iconName1"
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Integrated Care & Physiotherapy Centre
      </h1>
      <div className="icon-container">
        <div className="icon-title">
          <img
            className="imgicon"
            src={`${process.env.REACT_APP_API_URL}icon.png`}
            alt="Logo for God's Touch Physiotherapy Centre"
          />

          <h1 className="iconName">God's Touch</h1>
        </div>
      </div>
    </div>
  );
}

export default Top;
