import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props) {
  let {id} = useParams();
  if(!id) {
    id = 0;
  }

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
    </div> 
  )
}

export default Detail;