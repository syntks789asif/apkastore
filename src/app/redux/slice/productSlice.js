import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // products: {
  allProducts: [],
  cart: [],
  orders: [],
  // },
};
// const initialState= [];
// export const productSlice = createSlice({
//   name: "product",
//   initialState,
// //   reducers: {
// //     setProducts: (state, action) => {
// //       state = action.payload;
// //       console.log(state);
// //     },
// //   },
// // });
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      console.log(state);
      return state;
    },
    addCart: (state, action) => {
      console.log(action.payload);
      console.log(action.payload);
      // const cartproduct = { ...action.payload, quantity: 1 };
      const cartproduct = Object.assign({}, action.payload, {
        quantity: 1}
      );

      console.log(cartproduct);
      // state.products.cart.push(action.payload);
      state.cart.push(cartproduct);
      console.log(state);
      return state;
    },
    removeFromCart:(state,action)=>{
      console.log(action.payload);
      const index = state.cart.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (index >= 0) {
        state.cart.splice(index, 1);
      }
      console.log(state);
      return state;

    },
    addQuantity:(state,action)=>{
      // console.log(action.payload);
      const index = state.cart.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (index >= 0) {
        if (state.cart[index].quantity) state.cart[index].quantity++;

      }
      // console.log(state);
      return state;
    },
    subQuantity:(state,action)=>{
       const index = state.cart.findIndex((item) => item.id === action.payload);
       console.log(index);
       if (state.cart[index].quantity === 1) state.cart.splice(index, 1);
       else{
       if (index >= 0) {
        state.cart[index].quantity--;
       }
      }
       return state
    },
    addOrder: (state, action) => {
      // state.products.orders.push(action.payload);
      state.orders.push(action.payload);
      console.log(state);
      return state;
    },
  },
});

export const { setProducts, addCart, addOrder,removeFromCart,addQuantity,subQuantity } = productSlice.actions;
// export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
