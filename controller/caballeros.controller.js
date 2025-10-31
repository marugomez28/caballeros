import { buscarCaballeroPorNombre, crearCaballero } from "../services/caballeros.service.js";

export const obtenerCaballero = async (req, res) => {
  try {
    const nombre = req.params.nombre.toLowerCase();

    const caballero = await buscarCaballeroPorNombre(nombre);
    if (!caballero) {
      return res.status(404).json({ message: "Caballero no encontrado" });
    }

    res.json(caballero);
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
};

export const nuevocaballero =async(req,res)=>{
try{
    const data =req.body;
    if (!data.nombre||!data.constelacion||!data.imagen){
        return res.status(400).json({message: "Faltan datos minimos para ingresar la pantera"});
    }
    const nuevocaballero = await crearCaballero(data);
    res.status(201).json({
        message:"una nea creada ",
        data:nuevocaballero,
    });
}catch(error){
    res.status(500).json({
        message:"El servidor se chirrio ",
        error:error.message,
    });
}
};