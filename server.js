import express from "express";  
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import caballeros from "./routes/caballeros.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoAtlas conectado"))
  .catch((err) => {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1); 
  });


app.get("/", (req, res) => {
  res.json({ 
    message: "Backend de Caballeros del Zodiaco funcionando",
    version: "1.0.0",
    status: "active"
  });
});


app.use("/api/caballeros", caballeros);


app.use("*", (req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});


app.use((error, req, res, next) => {
  console.error("Error del servidor:", error);
  res.status(500).json({ 
    error: "Error interno del servidor",

    ...(process.env.NODE_ENV === 'development' && { details: error.message })
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});