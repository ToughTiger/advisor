import { Property } from "../property/Property";

export type City = {
  createdAt: Date;
  id: string;
  name: string;
  property?: Array<Property>;
  slug: string | null;
  updatedAt: Date;
};
