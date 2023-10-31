import { model, Schema } from "mongoose";
import IProd from "../interfaces/prod.interface";

const UserSchema = new Schema<IProd>(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    descripcion: {
      type: String,
      default: "Sin Descripción",
    },
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      select: false,
      min: 0,
    },
    imagenUrl: {
      type: String,   
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);


export default model<IProd>("Products", UserSchema);
