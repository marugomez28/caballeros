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
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoAtlas conectado"))
  .catch((err) => console.error(err));

app.use("/api/caballeros", caballeros);


app.listen(process.env.PORT, () =>
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
);
