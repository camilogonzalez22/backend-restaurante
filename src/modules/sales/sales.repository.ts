import { ObjectId, UpdateResult } from "mongodb";
import { getDb } from "../../config/database";
import { Sale } from "./sales.model";

export class SalesRepository {
  private collection() {
    return getDb().collection<Sale>("sales");
  }

  async create(data: Sale): Promise<Sale> {
    const result = await this.collection().insertOne(data);
    return { _id: result.insertedId, ...data };
  }

  async findAll(): Promise<Sale[]> {
    return this.collection().find({ isActive: true }).toArray();
  }

  async findById(id: string): Promise<Sale | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async delete(id: string): Promise<UpdateResult> {
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