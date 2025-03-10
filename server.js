import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import connectDB from "./coconup/config/db.js" // Conecta a la base de datos
import userRoutes from "./coconup/routes/userRoutes.js"; // Verifica que la ruta sea correcta

// Cargar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Middleware
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS

// Rutas
app.use("/api/users", userRoutes); // Verifica que userRoutes.js esté en la carpeta 'routes'

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Servidor funcionando correctamente! 🚀");
});

// Conectar a MongoDB
connectDB();


// Configurar puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en el puerto ${PORT}`));
