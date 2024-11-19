import React, { useState, useEffect } from 'react';
import Spinner from './styles/Spinner';
import Navhead from './main/Navhead';
import './App.css'; 
import Hometop from './main/Hometop';
import Footer from './pages/Footer';
import Cards from './pages/Cards';
import { Modal, Button } from 'react-bootstrap'; // Ensure Button is imported if needed
import Top from './main/Top';
import Sticky from './styles/Sticky';
import About from './main/About';
import Card from 'react-bootstrap/Card';


function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(true); // State for controlling modal visibility

  useEffect(() => {
    // Simulate loading time with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set loading time (2 seconds here)

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false); // Close modal when button is clicked
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div>
    <Top></Top>

        <Navhead />
      
      </div>
      
      {/* Show the modal when the page loads */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
  <Modal.Header closeButton>
    <Modal.Title className='cardtitle' style={{ textAlign: 'center' }}>Welcome..........!</Modal.Title>
  </Modal.Header>

  <Card className="custom-card ">
    <Card.Img src="https://i.postimg.cc/vHDtWh4b/photo-2024-11-10-11-49-26.jpg" alt="Card image" />
  
  </Card>
</Modal>




      <Sticky></Sticky>

      <Hometop />
<About></About>
      <Cards />

      <Footer />
    </>
  );
}

export default App;
