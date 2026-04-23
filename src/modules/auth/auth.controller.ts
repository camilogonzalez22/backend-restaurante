import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  private service = new AuthService();

  login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await this.service.login(req.body);
      res.json(result);
    } catch (error: any) {
      next(error);
    }
  };
}