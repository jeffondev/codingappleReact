import { useState, memo, useTransition } from 'react'
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changecount } from './store'

let Child = memo (function(){
  return <div>자식임</div>
})

let a = new Array(10000).fill(0)

function Cart(){

  let state = useSelector((state)=> state)
  let dispatch = useDispatch()
  let [count,setCount] = useState(0);

  let [name, setName] = useState('')
  let [isPending, 늦게처리] = useTransition()

  return (
    
    <div>

      <input onChange={(e)=>{
        늦게처리(()=>{
          setName(e.target.value)
        })
      }}/>

     


      <Child count={count}></Child>
      <button onClick={()=>{ setCount(count+1) }}>+</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>

          {
            state.cart.map((a, i)=>
              <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td> 
              <td><button onClick={()=>{
                dispatch(changecount(state.cart[i].id))
              }}>+</button></td>
            </tr>
            )
          }

          
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart