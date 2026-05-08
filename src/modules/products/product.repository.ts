import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Product } from "./product.model";

export class ProductRepository {
  private collection() {
    return getDb().collection<Product>("products");
  }

  async create(data: Product): Promise<Product> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Product[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  async findById(id: string): Promise<Product | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(id: string, data: Partial<Product>) {
    return this.collection().updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    );
  }

  async delete(id: string) {
    return this.collection().updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          isActive: false,
          updatedAt: new Date(),
        },
      }
    );
  }
}