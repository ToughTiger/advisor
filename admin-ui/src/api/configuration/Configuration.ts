import { Property } from "../property/Property";

export type Configuration = {
  bhktype: string;
  createdAt: Date;
  id: string;
  price: number | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
