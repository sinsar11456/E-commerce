import { createSlice } from "@reduxjs/toolkit";

// redux is used to manage state, and for cart there will be products quantity and price.
// reducers are actions, when a product is added to the cart products quantity and price
// should be updated. payload refers to the product thats being added to the cart.
const userSlice = createSlice({
  name: "user",
  initialState: {

currentUser: null,
isFetching: false,
    error: false,
  },
  reducers: {
    loginStart:(state)=>{
      state.isFetching=true 
    }, loginSuccess:(state,action)=>{
      state.isFetching=false;
      state.currentUser=action.payload;
    }, 
    loginFailure:(state)=>{
      state.isFetching=false ;
      state.error=true ;
    }
  },
});
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
