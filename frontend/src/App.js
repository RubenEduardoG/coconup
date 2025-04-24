import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import Navbar from './components/Navbar';



function App() {
  const productos = [
    {
      nombre: "Aceite de Coco",
      precio: 1500,
      unidad: "500ml",
      imagen: "https://via.placeholder.com/250x200.png?text=Aceite+de+Coco"
    },
    {
      nombre: "Harina de Almendras",
      precio: 2300,
      unidad: "1kg",
      imagen: "https://via.placeholder.com/250x200.png?text=Harina+de+Almendras"
    },
    {
      nombre: "Jabón Natural",
      precio: 800,
      unidad: "150g",
      imagen: "https://via.placeholder.com/250x200.png?text=Jab%C3%B3n+Natural"
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <h1>Bienvenido a CoconutBliss 🌴</h1>
      <p>Tu red de productos naturales</p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {productos.map((prod, index) => (
          <ProductCard key={index} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default App;
