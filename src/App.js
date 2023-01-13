import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js'

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  let [counter, setCounter] = useState(0);


  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JeffShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
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
                    )})} 
              </Row>
              { counter === 0 && (
              <button onClick={()=>{ 
                axios.get('https://codingapple1.github.io/shop/data'+ (counter+2) +'.json')
                .then((결과)=>{ 
                  console.log( 결과 )
                  let copy = [...shoes, ...결과.data];
                  setShoes(copy);
                })
                .catch(()=>{
                  console.log( "실패함" )
                })

                setCounter(counter+1);
                console.log(counter);

                axios.post('/dkf', {name : 'jeffrey'})

               }}>더 보기</button>
              )}

            </Container>
          </div>
        } />
        
        
        {/* {<Route path='/detail' element={ <Detail shoes={shoes} />} /> } */}
        <Route path='/detail/:id?' element={
            <Detail shoes={shoes} />
           } />

        <Route path="*" element={ <div>없는 페이지 입니다.</div> } />

        <Route path='/cart' element={<Cart/>}/>
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
