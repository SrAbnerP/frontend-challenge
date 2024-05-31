import { CartItem, useCart } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import "./MinicartCard.scss";

interface MinicartCardProps {
  item: CartItem;
}

function MinicartCard({ item }: MinicartCardProps) {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCart();

  const removeItemToCart = () => {
    removeItem(item.id);
  };

  return (
    <article key={item.id} className="containerMinicartCard">
      <img src={item.photo} alt={item.name} />
      <h2>{item.name}</h2>

      <div className="containerMinicartChange">
        Qtd:
        <div className="minicartCardChange">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
      </div>

      <h1>{formatCurrency(item.price, "BRL")}</h1>

      <button className="minicartCardRemove" onClick={removeItemToCart}>
        x
      </button>
    </article>
  );
}

export default MinicartCard;
