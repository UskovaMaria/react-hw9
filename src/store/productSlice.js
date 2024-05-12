import { createSlice } from "@reduxjs/toolkit";

console.log(process.env.PUBLIC_URL);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    prodsList: [
      { id: 1, price: 1000, title: 'prod1', descr: 'descr 1', img: `${process.env.PUBLIC_URL +'/img/img1.jfif'}`, publish: true, catalogs: 1 },
      { id: 2, price: 2000, title: 'prod2', descr: 'descr 2', img: `${process.env.PUBLIC_URL +'/img/img2.jfif'}`, publish: true },
      { id: 3, price: 3000, title: 'prod3', descr: 'descr 3', img: `${process.env.PUBLIC_URL +'/img/img3.jfif'}`, publish: true },
    ],
    cartProdsList: [],
  },
  reducers: {
    addProduct(state, action) {
      const product = action.payload.product;
      state.prodsList.push(product);
    },
    delProduct(state, action) {
      const productId = action.payload.productId;
      state.prodsList = state.prodsList.filter(product => product.id !== productId);
    },
  }
});

export const { addProduct, delProduct } = productSlice.actions;
export default productSlice.reducer;