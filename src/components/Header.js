import React from 'react';

// bootsrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import logo from '../logo.svg';

function Header (){

    return(

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
    )
}

export default Header;