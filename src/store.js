import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
  name : 'user',
  initialState : 'kim'
})

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 1, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ], 
  reducers : {
    changecount(state, i){
      console.log(state);
      console.log(i);
      state[i.payload].count += 1;
    }
  }
})

export let { changecount } = cart.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})