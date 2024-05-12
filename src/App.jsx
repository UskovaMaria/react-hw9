import { useState } from "react";
import { useSelector } from "react-redux";
import { AddProductForm } from "./components/AddProductForm";
import { Products } from "./components/Products";
import { ShowProductsQty } from "./components/ShowProductsQty";
import { CartPopup } from "./components/CartPopup";
import Overlay from "./components/Overlay"; 

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); 
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCartPopup = () => {
    setIsCartPopupOpen((prev) => !prev);
    setShowOverlay(!showOverlay);
  };

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
    setShowOverlay(!showOverlay); 
  };

  return (
    <>
    
    <div className={`container ${isCartPopupOpen ? 'overlay-active' : ''}`}>

        <header className="header">
          <div className="logo">SHOP</div>
          <div className="action-block">
            <div className="manage">
              <button
                onClick={toggleShowForm}
                className="btn manage__add-prod-form"
              >
                add
              </button>
            </div>
            <div className="btn cart" onClick={toggleCartPopup}>{cartItems.length}</div>
          </div>
        </header>

        <main className="main">

          <ShowProductsQty />
          <Products />

        </main>

        <footer className="footer"></footer>

        {
          showForm &&
          <AddProductForm onClose={toggleShowForm}/>
        }

        <CartPopup isOpen={isCartPopupOpen} onClose={toggleCartPopup} />
        
      </div>
      <Overlay show={showOverlay} onClick={() => {
        setShowForm(false);
        setIsCartPopupOpen(false);
        setShowOverlay(false);
      }} />
    </>
  );
}

export default App;