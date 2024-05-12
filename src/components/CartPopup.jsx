import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../store/cartSlice';

export const CartPopup = ({ isOpen, onClose }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };
  
    calculateTotalPrice();
  }, [cartItems]);

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`}>
      <div className="cart-popup__content">
        <div className="cart-popup__title">
          <button className="btn close-btn" onClick={onClose}>Close</button>
          <h2>Cart</h2>
        </div>
        <div className="cart-popup__items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-popup__item">
              <img className="cart-popup__img" src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <div className="cart-popup__quantity">
                <button className="btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button className="btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <p>Price: {item.price * item.quantity}</p>
            </div>
          ))}
        </div>
        <p className="cart-popup__total">Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

