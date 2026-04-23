import { getDb } from "../../config/database";
import { Client } from "../clients/clients.model";

export class AuthRepository {
  private collection() {
    return getDb().collection<Client>("clients");
  }

  async findByEmail(email: string): Promise<Client | null> {
    return this.collection().findOne({ email });
  }
}