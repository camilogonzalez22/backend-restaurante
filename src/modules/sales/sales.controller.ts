import { Request, Response, NextFunction } from "express";
import { SalesService } from "./sales.service";

export class SalesController {
  private service = new SalesService();

  // Crear venta
  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.create(req.body);
      res.status(201).json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Obtener todas
  findAll = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.findAll();
      res.json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Obtener una por ID
  findById = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.findById(req.params.id);
      res.json(data);
    } catch (error: any) {
      next(error);
    }
  };

  // Eliminar 
  delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.delete(req.params.id);
      res.json(data);
    } catch (error: any) {
      next(error);
    }
  };
  put = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.service.put(req.params.id);
      res.json(data);
    } catch (error: any) {
      next(error);
    }
  }
}