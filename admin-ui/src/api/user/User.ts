import { Property } from "../property/Property";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  properties?: Array<Property>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
