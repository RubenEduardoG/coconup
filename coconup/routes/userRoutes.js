import express from "express";
const router = express.Router();

// Ruta de prueba
router.get("/", (req, res) => {
  res.send("Ruta de usuarios funcionando correctamente 🚀");
});

export default router;
