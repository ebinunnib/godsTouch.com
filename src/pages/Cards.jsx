import React, { useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cards.css';

function Cards() {
  const cardContainerRef = useRef(null);

  // Optional: Swipe detection logic
  useEffect(() => {":"
    const container = cardContainerRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
    };

    const mouseUpHandler = () => {
      isDown = false;
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Multiplier to adjust scroll speed
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', mouseDownHandler);
    container.addEventListener('mouseleave', mouseLeaveHandler);
    container.addEventListener('mouseup', mouseUpHandler);
    container.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      container.removeEventListener('mousedown', mouseDownHandler);
      container.removeEventListener('mouseleave', mouseLeaveHandler);
      container.removeEventListener('mouseup', mouseUpHandler);
      container.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div className="card-container" ref={cardContainerRef}>
                                                          {/* card1 */}
                                                          
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>
                                                       {/* card2 */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>
                                                      {/* card3 */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>


      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>



      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>




      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>



      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {/* Map through your card items here */}
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>



        {/* Repeat similar <Col> structures for more cards */}

        
      </Row>
    </div>
  );
}

export default Cards;
