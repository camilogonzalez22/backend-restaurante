import { ObjectId } from "mongodb";

export interface SaleProduct {
  name: string;
  price: number;
  quantity: number;
}

export interface Sale {
  _id?: ObjectId;
  clientId: ObjectId;
  products: SaleProduct[];
  total: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}