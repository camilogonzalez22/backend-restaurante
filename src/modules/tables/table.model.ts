import { ObjectId } from "mongodb";

export interface Table {
  _id?: ObjectId;
  number: number;
  capacity: number;
  status: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}