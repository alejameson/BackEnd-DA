import { check, ValidationChain } from "express-validator";

export const authLoginValidators: Array<ValidationChain> = [
  check("email").isEmail().withMessage("El email no es válido"),
  check("contraseña")
    .isLength({ min: 6})
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

export const authSingupValidators: Array<ValidationChain> = [
  check("nombre").notEmpty().withMessage("El nombre es obligatorio"),
  check("email").isEmail().withMessage("El email no es válido"),
  check("contraseña")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

export const mongoIdValidator: ValidationChain = check("id")
  .isMongoId()
  .withMessage("El ID proporcionado no es válido para MongoDB.");