import { ObjectId } from "mongodb";

export interface Client {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string; 
  phone: string;
  address?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}