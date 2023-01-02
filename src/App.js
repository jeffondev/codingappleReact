import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import data from './data.js';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
    
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JeffShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
 
    <div className='main-bg'></div>

    <Container>
      <Row>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품</h4>
          <p>상품정보</p>
        </Col>
        <Col>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
          <h4>상품명</h4>
          <p>상품정보</p>
        </Col>
      </Row> 
    </Container>

    </div>
  );
}

export default App;
