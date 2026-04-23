import { ClientsRepository } from "./clients.repository";
import { Client } from "./clients.model";
import { hashPassword } from "../../libs/bcrypt";

export class ClientsService {
  private repository = new ClientsRepository();

  async create(data: any) {
  const hashedPassword = await hashPassword(data.password);

  const now = new Date();

  const client = {
    ...data,
    password: hashedPassword,
    isActive: true,
    createdAt: now,
    updatedAt: now,
  };

  return await this.repository.create(client);
}
  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const client = await this.repository.findById(id);
    if (!client) throw new Error("Cliente no encontrado");
    return client;
  }

  async update(id: string, data: Partial<Client>) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}