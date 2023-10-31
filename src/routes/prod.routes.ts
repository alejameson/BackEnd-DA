import { Router } from "express";
import * as productController from "../controllers/prod.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { productValidators } from "../middlewares/validators/prodValidators";
import { handleValidationErrors } from "../middlewares/validation.middleware";
import { mongoIdValidator } from "../middlewares/validators/userValidators";

const router = Router()

// OBTENER TODOS
router.get("/", productController.index);
// CREAR
router.post("/", ...productValidators,
handleValidationErrors, authMiddleware, productController.create); 
// OBTENER UNO
router.get("/:id", mongoIdValidator, productController.show);
// BORRAR
router.delete("/:id", authMiddleware,  productController.destroy);

export default router;
