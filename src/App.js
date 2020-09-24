import React from 'react';
import logo from './logo.svg';

// bootsrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// project components
import NewNote from './components/NewNote';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="contenedor">
        <Row className="text-center align-items-center">
          <Col  >
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col>
            <h1>
              React notes
            </h1>
          </Col>
        </Row>
      </Container>
      <br />
      <NewNote />
    </div >
  );
}

export default App;


