import { useParams } from "react-router-dom";

function Detail(props) {
  let {id} = useParams();

  // props.shoes = data
  var shoe;
  console.log(id);
  for(var i=0; i<props.shoes.length; i++) {
    if(props.shoes[i].id == id) {
      shoe = props.shoes[i];
    }
  }

  console.log(shoe);
  
  return(
    <div className="container">
      <div className="row"> 
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id)+1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
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