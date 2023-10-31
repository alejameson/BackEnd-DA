import { check, ValidationChain } from "express-validator";

export const productValidators: Array<ValidationChain> = [
  check("nombre")
    .isLength({ min: 3, max: 20 })
    .isLowercase()
    .withMessage("El nombre debe tener entre 3 y 20 caracteres en minúsculas"),
  check("descripcion")
    .isLength({ min: 10 })
    .withMessage("La descripción debe tener al menos 10 caracteres"),
  check("precio")
    .isFloat({ min: 0 })
    .withMessage("El precio no puede ser negativo"),
  check("imagenUrl")
    .isURL()
    .withMessage("La imagenUrl debe ser una URL válida"),
];
