import { useState } from "react";

import cart from "../../assets/svg/cart.svg";

import "./Minicart.scss";
import { useCart } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import MinicartCard from "../MinicartCard/MinicartCard";

function Minicart() {
  const [isOpen, setIsOpen] = useState(false);

  const { total, items, totalItems } = useCart();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="containerCart">
      <button onClick={toggleCart} className="cartButton">
        <img src={cart} alt="Cart" />
        <p>{totalItems}</p>
      </button>

      {isOpen && (
        <div className="cart">
          <div className="containerTopCart">
            <div className="topCart">
              <h2 className="titleCart">
                Carrinho
                <br /> de Compras
              </h2>
              <button className="buttonClose" onClick={toggleCart}>
                X
              </button>
            </div>
            <div className="containerItems">
              {items.map((item) => (
                <MinicartCard item={item} key={item.id} />
              ))}
            </div>
          </div>

          <div className="footerCart">
            <div className="totalCart">
              <h1>Total:</h1>
              <h1>{formatCurrency(total, "BRL")}</h1>
            </div>
            <button className="buttonBuyCart">Finalizar Compra</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Minicart;
