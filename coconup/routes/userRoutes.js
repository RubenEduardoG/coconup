const express = require("express");
const router = express.Router();

// Ruta de prueba
router.get("/", (req, res) => {
  res.send("Ruta de usuarios funcionando correctamente 🚀");
});

module.exports = router;
