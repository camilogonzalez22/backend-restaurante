import { ReservationRepository } from "./reservation.repository";
import { Reservation } from "./reservation.model";

export class ReservationService {
  private repository =
    new ReservationRepository();

  async create(data: Reservation) {
    const now = new Date();

    const reservation = {
      ...data,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };

    return await this.repository.create(
      reservation
    );
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const reservation =
      await this.repository.findById(id);

    if (!reservation)
      throw new Error("Reserva no encontrada");

    return reservation;
  }

  async update(
    id: string,
    data: Partial<Reservation>
  ) {
    return await this.repository.update(
      id,
      data
    );
  }

  async delete(id: string) {
    return await this.repository.delete(id);
  }
}