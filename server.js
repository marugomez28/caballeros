import express from "express";  
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import caballeros from "./routes/caballeros.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoAtlas conectado"))
  .catch((err) => {
    console.error("Error conectando a MongoDB:", err);
    process.exit(1);
  });

// Ruta raíz para health checks
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend de Caballeros del Zodiaco funcionando",
    version: "1.0.0",
    status: "active"
  });
});

// Rutas de la API
app.use("/api/caballeros", caballeros);

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});