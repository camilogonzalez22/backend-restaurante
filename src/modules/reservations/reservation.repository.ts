import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { Reservation } from "./reservation.model";

export class ReservationRepository {
  private collection() {
    return getDb().collection<Reservation>(
      "reservations"
    );
  }

  async create(
    data: Reservation
  ): Promise<Reservation> {
    const result = await this.collection().insertOne(
      data
    );

    return {
      _id: result.insertedId,
      ...data,
    };
  }

  async findAll(): Promise<Reservation[]> {
    return this.collection()
      .find({ isActive: true })
      .toArray();
  }

  async findById(
    id: string
  ): Promise<Reservation | null> {
    return this.collection().findOne({
      _id: new ObjectId(id),
      isActive: true,
    });
  }

  async update(
    id: string,
    data: Partial<Reservation>
  ) {
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