import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Client } from "./clients.model";

export class ClientsRepository {
  private collection() {
    return getDb().collection<Client>("clients");
  }

  async create(data: Client): Promise<Client> {
    const result = await this.collection().insertOne(data);
    return { _id: result.insertedId, ...data };
  }

  async findAll(): Promise<Client[]> {
    return this.collection().find({ isActive: true }).toArray();
  }

  async findById(id: string): Promise<Client | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(id: string, data: Partial<Client>) {
    return this.collection().updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updatedAt: new Date() } }
    );
  }

  async delete(id: string) {
    return this.collection().updateOne(
      { _id: new ObjectId(id) },
      { $set: { isActive: false, updatedAt: new Date() } }
    );
  }
}