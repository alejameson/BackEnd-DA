import { Document } from "mongoose";

interface IProd extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

export default IProd;