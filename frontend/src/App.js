import React from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";




function App() {


  const productos = [
    {
      nombre: "Jabón Vegetal Cítrico",
      precio: 1800,
      unidad: "1 unidad",
      imagen: "/productos/jabon-citrico.jpeg"
    },
    {
      nombre: "Set Jabones Natura Ekos",
      precio: 2900,
      unidad: "4 unidades",
      imagen: "/productos/ekos-jabones.jpeg"
    },
    {
      nombre: "Pulpa para Manos Castaña - Ekos",
      precio: 2700,
      unidad: "75g",
      imagen: "/productos/pulpa-castana.jpeg"
    },
    {
      nombre: "Néctar para Manos Maracuyá - Ekos",
      precio: 2700,
      unidad: "75g",
      imagen: "/productos/nectar-maracuya.jpeg"
    },
    {
      nombre: "Shampoo Sólido - Almendra",
      precio: 2200,
      unidad: "1 unidad",
      imagen: "/productos/shampoo-botellas.jpeg"
    },
    {
      nombre: "Jabón Facial Redondo",
      precio: 1500,
      unidad: "1 unidad",
      imagen: "/productos/jabon-redondo.jpeg"
    },
    {
      nombre: "Jabón en forma de corazón",
      precio: 1600,
      unidad: "1 unidad",
      imagen: "/productos/jabon-corazon-1.jpeg"
    },
    {
      nombre: "Jabón Corazón Crema",
      precio: 1600,
      unidad: "1 unidad",
      imagen: "/productos/jabon-corazon-2.jpeg"
    }
  ];
  return (
    <div className="App">
      {/* Navbar arriba */}
      <Navbar />

      {/* Hero (bienvenida) */}
      <section className="hero fade-in">
        <h1 className="hero-title">Coconutbliss 🌴</h1>
        <p className="hero-subtitle">Bienvenido a nuestra tienda de productos naturales</p>
      </section>

      {/* Productos */}
      <section className="product-grid fade-in">
        {productos.map((producto, index) => (
          <ProductCard key={index} {...producto} />
        ))}
      </section>

      {/* Footer al final */}
      <Footer />

      {/* Botón Volver arriba */}
      <a href="#" className="back-to-top">↑ Volver arriba</a>
    </div>
  );
}

export default App;