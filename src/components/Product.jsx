import React from 'react';
import { useDispatch } from 'react-redux';
import { delProduct } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';

export const Product = (props) => {
  const { id, price, title, descr, img } = props.data;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(delProduct({ productId: id }));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, img }));
  };

  return (
    <div className="product" data-id={ id }>
      <div className="product__img">
        <img src={ img } alt="" />
      </div>
      <h3 className="product__title">{ title }</h3>
      <p className="product__descr">{ descr }</p>
      <div className="product__add-cart-block">
        <div className="product__price">{ price }</div>
        <button className="btn product__add-cart-btn" onClick={handleAddToCart}>Add to cart</button>
        <button className="btn product__del-cart-btn" onClick={handleDelete}>x</button>
      </div>
    </div>
  );
};