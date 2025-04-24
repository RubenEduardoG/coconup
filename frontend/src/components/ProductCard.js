import React, { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../context/CartContext";

function ProductCard({ nombre, precio, unidad, imagen }) {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p><strong>Precio:</strong> ${precio}</p>
      <p><strong>Unidad:</strong> {unidad}</p>
      <button onClick={() => agregarAlCarrito({ nombre, precio, unidad, imagen })}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
