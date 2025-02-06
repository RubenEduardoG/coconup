const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/db"); // Asegúrate de que este archivo existe
const userRoutes = require("./routes/userRoutes"); // Verifica que la ruta sea correcta

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB();

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

// Configurar puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en el puerto ${PORT}`));
