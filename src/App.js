import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JeffShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>

            <Container>
              <Row>

                {
                  shoes.map(function(a, i) {
                    return (
                      <Col key={i}>
                        <Card shoes={shoes[i]} i={i+1}></Card>
                      </Col>
                    )
                  })
                }
                
              </Row>
            </Container>
          </div>
        } />
        
        
        {/* {<Route path='/detail' element={ <Detail shoes={shoes} />} /> } */}
        <Route path='/detail/:id?' element={ <Detail shoes={shoes} />} />
        <Route path="*" element={ <div>없는 페이지 입니다.</div> } />
      </Routes>
    </div>
  );
}



function Card(props) {
  return (
    <div className='model'>
        <img src={'https://codingapple1.github.io/shop/shoes'+ props.i+'.jpg'} width="80%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
     </div>
  )
}

export default App;
