import { Property } from "../property/Property";

export type Configuration = {
  bhktype: string;
  createdAt: Date;
  id: string;
  price: number | null;
  property?: Array<Property>;
  updatedAt: Date;
};
