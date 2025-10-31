import mongoose from "mongoose";

const caballeroSchema =new mongoose.Schema({
    nombre:String,
    constelacion:String,
    imagen:String,
    altura:Number,
    peso:Number,
    edad:Number,
    descripcion:String,
});

export default mongoose.model("Caballero",caballeroSchema);
