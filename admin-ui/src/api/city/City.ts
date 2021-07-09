import { Property } from "../property/Property";

export type City = {
  createdAt: Date;
  id: string;
  name: string;
  property?: Property | null;
  slug: string | null;
  updatedAt: Date;
};
