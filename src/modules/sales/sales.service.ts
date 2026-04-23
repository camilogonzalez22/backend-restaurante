import { ObjectId } from "mongodb";
import { SalesRepository } from "./sales.repository";
import { Sale } from "./sales.model";

export class SalesService {
  private repository = new SalesRepository();

  async create(data: any) {
    if (!data.clientId || !data.products || !Array.isArray(data.products)) {
      throw new Error("Datos inválidos");
    }

    const total = data.products.reduce(
      (acc: number, p: any) => acc + p.price * p.quantity,
      0
    );

    const now = new Date();

    const sale: Sale = {
      clientId: new ObjectId(data.clientId),
      products: data.products,
      total,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(sale);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const sale = await this.repository.findById(id);
    if (!sale) throw new Error("Venta no encontrada");
    return sale;
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}