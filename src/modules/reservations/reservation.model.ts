import { ObjectId } from "mongodb";

export interface Reservation {
  _id?: ObjectId;
  clientName: string;
  tableNumber: number;
  date: string;
  status: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}