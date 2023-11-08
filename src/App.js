import React, { useState } from 'react';
import { Navbar, Nav, Modal, Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import LoginModal from './components/LoginModal';
import SignUp from './components/SignUp';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const redirectToLogin = () => {
    setShowLogin(true);
  };

  const carouselImages = [
    {
      id: 1,
      title: 'SKANDA',
      description: 'Action',
      image: 'https://www.nowrunning.com/content/movie/2023/boyap-28106/Stills/skanda_2023923.jpg',
    },
    {
      id: 2,
      title: 'TIGER 3',
      description: 'ACTION',
      image: 'https://www.yashrajfilms.com/images/default-source/movies/tiger-3/tiger-3---salman-khan-katrina-kaif5f98ada026f56f7f9f64ff0e00090313.jpg?sfvrsn=866dc2cc_6',
    },
    {
      id: 3,
      title: 'The Marvels',
      description: 'Action',
      image: 'https://www.cinelinx.com/wp-content/uploads/2023/09/THE-MARVELS_27x40_IMAX_Digital_Supplemental_v3_Lg.jpeg',
    },
    {
      id: 4,
      title: 'Aadikeshava',
      description: 'Action',
      image: 'https://moviegalleri.net/wp-content/uploads/2023/08/Panja-Vaisshnav-Tej-Sreeleela-Aadikeshava-movie-release-on-Nov-10th.jpg',
    },
    {
      id: 5,
      title: 'Salaar',
      description: 'Action',
      image: 'https://m.media-amazon.com/images/M/MV5BOTk4ZDQ1ZTctNzU3MC00NmY4LWJjMzItNDMwZTA2ODhiYWM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
    },
    {
      id: 6,
      title: 'Animal',
      description: 'Animal',
      image: 'https://m.media-amazon.com/images/M/MV5BNWU5ZDRmMWItZGU0NC00NzZjLTgzYjctY2RlMzI3OTNkN2U5XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg',
    }
  ];

  const smallCards = [
    {
      id: 1,
      title: 'SKANDA',
      description: <b>Action/Thriller</b>,
      image: 'https://www.nowrunning.com/content/movie/2023/boyap-28106/Stills/skanda_2023923.jpg',
    },
    {
      id: 2,
      title: 'TIGER 3',
      description: <b>Action/Adventure</b>,
      image: 'https://www.yashrajfilms.com/images/default-source/movies/tiger-3/tiger-3---salman-khan-katrina-kaif5f98ada026f56f7f9f64ff0e00090313.jpg?sfvrsn=866dc2cc_6',
    },
    {
      id: 3,
      title: 'The Marvels',
      description: <b>Action/Adventure/Fantasy</b>,
      image: 'https://www.cinelinx.com/wp-content/uploads/2023/09/THE-MARVELS_27x40_IMAX_Digital_Supplemental_v3_Lg.jpeg',
      width: 190,
      height: 281
    },
    {
      id: 4,
      title: 'Aadikeshava',
      description: <b>Action/Thriller</b>,
      image: 'https://moviegalleri.net/wp-content/uploads/2023/08/Panja-Vaisshnav-Tej-Sreeleela-Aadikeshava-movie-release-on-Nov-10th.jpg',
      width: 190,
      height: 281
    },
    {
      id: 5,
      title: 'Salaar',
      description: <b>Action/Drama/Sports</b>,
      image: 'https://m.media-amazon.com/images/M/MV5BOTk4ZDQ1ZTctNzU3MC00NmY4LWJjMzItNDMwZTA2ODhiYWM5XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg',
    },
    {
      id: 6,
      title: 'Animal',
      description: <b>Action/Drama/Sports</b>,
      image: 'https://m.media-amazon.com/images/M/MV5BNWU5ZDRmMWItZGU0NC00NzZjLTgzYjctY2RlMzI3OTNkN2U5XkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_.jpg',
    }
  ];

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">SHOWTIME SQUAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ml-auto d-flex align-items-center">
            <Nav.Link onClick={handleLoginClick}>
              <Button variant="primary">Login</Button>
            </Nav.Link>
            <span className="mx-2"></span> {/* Optional: Separating line */}
            <Nav.Link onClick={handleSignupClick}>
              <Button variant="success">Sign Up</Button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <div className="main-content">
          <Carousel>
            {carouselImages.map((item) => (
              <Carousel.Item key={item.id} onClick={redirectToLogin}>
                <img
                  className="react w-100"
                  src={item.image}
                  alt={item.title}
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <hr style={{ margin: '20px 0', border: 'none', borderBottom: '1px solid black' }} />
        <p style={{ textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>ON SCREEN</p>

        <div className="d-flex flex-nowrap overflow-auto">
          {smallCards.map((card) => (
            <Card key={card.id} style={{ width: '16rem', margin: '8px' }}>
              <div style={{ width: '100%', height: '25rem', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={card.image}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary" onClick={handleLoginClick}>BOOK NOW</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

      <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5deb3' }}>
        <div style={{ color: '#000', textAlign: 'right' }}>@2023 SHOWTIMESQUAD All rights reserved</div>
      </footer>

      <Modal show={showLogin || showSignup} onHide={closeModal}>
        {showLogin && <LoginModal onClose={closeModal} />}
        {showSignup && <SignUp onClose={closeModal} />}
      </Modal>
    </div>
  );
}

export default App;