import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';


function Detail(props) {
  let {id} = useParams();
  if(!id) {
    id = 0;
  }

  let [탭, 탭변경] = useState(0);


  // props.shoes = data
  var shoe;
  for(var i=0; i<props.shoes.length; i++) {
    if(props.shoes[i].id === id) {
      shoe = props.shoes[i];
    }
  }


  let [alert1, setalert1] = useState(true);

    useEffect(()=>{
      setTimeout(()=>{setalert1(false)}, 2000)
    }, [])

    let [num, setnum] = useState('');
    useEffect(()=>{
      if(isNaN(num)) {
        alert('그러지마세요')
      }
    }, [num])
    
  
  return(
    <div className="container">
      {
        alert1 === true
        ?<div className="alert alert-warning">
          2초이내 구매시 할인
        </div>
        :null
      }

      <div className="row"> 
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id)+1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <input onChange={(e)=>{ setnum(e.target.value) }}/>
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=> { 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=> { 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=> { 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭}/>
    </div>
  )
  
}

function TabContent({탭}) {

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{setFade('end')},100)

    return()=> {
      setFade('');
    }
  }, [탭])

  return (<div className={' start ' + fade}>
    { [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭] }
    </div>)

}

export default Detail;