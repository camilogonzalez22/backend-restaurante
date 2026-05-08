import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

export class ProductService {
  private repository = new ProductRepository();

  async create(data: Product) {
    const now = new Date();

    const product = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(product);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const product = await this.repository.findById(id);

    if (!product)
      throw new Error("Producto no encontrado");

    return product;
  }

  async update(
    id: string,
    data: Partial<Product>
  ) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}