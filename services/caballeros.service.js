import Caballero from "../models/caballeros.model.js";

export const buscarCaballeroPorNombre = async (nombre) => {
  return await Caballero.findOne({
    nombre: { $regex: new RegExp(`^${nombre}$`, "i") }
  });
};

export const crearCaballero =async (data) =>{
    const nuevocaballero =new Caballero(data);
    return await nuevocaballero.save();

};