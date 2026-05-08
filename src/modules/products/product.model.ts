import { ObjectId } from "mongodb";

export interface Product {
  _id?: ObjectId;
  name: string;
  price: number;
  stock: number;
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}