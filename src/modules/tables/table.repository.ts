import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Table } from "./table.model";

export class TableRepository {
  private collection() {
    return getDb().collection<Table>("tables");
  }

  async create(data: Table): Promise<Table> {
    const result = await this.collection().insertOne(data);

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Table[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  async findById(id: string): Promise<Table | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(id: string, data: Partial<Table>) {
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