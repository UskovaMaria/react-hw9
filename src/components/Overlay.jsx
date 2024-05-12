import React from 'react';

const Overlay = ({ show, onClick }) => {
  return (
    <div className={`overlay ${show ? 'show' : ''}`} onClick={onClick}></div>
  );
};

export default Overlay;