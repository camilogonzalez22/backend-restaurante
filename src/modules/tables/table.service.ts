import { TableRepository } from "./table.repository";
import { Table } from "./table.model";

export class TableService {
  private repository = new TableRepository();

  async create(data: Table) {
    const now = new Date();

    const table = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(table);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const table = await this.repository.findById(id);

    if (!table)
      throw new Error("Mesa no encontrada");

    return table;
  }

  async update(
    id: string,
    data: Partial<Table>
  ) {
    return await this.repository.update(id, data);
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}