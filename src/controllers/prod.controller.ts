import { Request, Response, NextFunction } from "express";
import Product from "../models/prod.model";
import IProd from "../interfaces/prod.interface";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.find();
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {nombre, descripcion, precio, imagenUrl} = req.body;

    const product: IProd = new Product({  
      nombre,
      descripcion,
      precio,
      imagenUrl,
    });

    await product.save();
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;//esto
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json("Not existe");
    await product.deleteOne();
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};
