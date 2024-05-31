import { useCart } from "../../context/CartContext";

import { motion } from "framer-motion";

import formatCurrency from "../../utils/formatCurrency";

import "./ProductCard.scss";

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

interface ProductCardProps {
  product?: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const addItemToCart = () => {
    if (product) {
      const newItem = {
        id: product.id,
        name: product.name,
        photo: product.photo,
        price: parseFloat(product.price),
        quantity: 1,
      };

      addItem(newItem);
    }
  };

  return (
    <motion.article
      className="containerProductCard"
      key={product?.id}
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="containerInfo">
        <div className="contentImage">
          <img src={product?.photo} className="image" alt={product?.name} />
        </div>
        <div className="titleAndPrice">
          <h1 className="titleProduct">{product?.name}</h1>
          <div className="priceProduct">
            {formatCurrency(product?.price, "BRL")}
          </div>
        </div>
        <p className="descProduct">{product?.description}</p>
      </div>

      <button className="buyButton" onClick={addItemToCart}>
        Comprar
      </button>
    </motion.article>
  );
}

export default ProductCard;
