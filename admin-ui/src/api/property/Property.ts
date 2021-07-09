import { User } from "../user/User";

export type Property = {
  carpet: number | null;
  city: string;
  configuration: string | null;
  constructionstart: Date | null;
  createdAt: Date;
  description: string;
  id: string;
  isfeatured: boolean | null;
  ispopular: boolean | null;
  isPromoted: boolean | null;
  locality: string | null;
  parking: number | null;
  pin: string;
  possession: Date | null;
  postedBy?: "Owner" | "Agent" | "Developer" | null;
  projectaddress: string;
  projectname: string;
  promoteduntil: Date | null;
  state: string | null;
  status?: "ReadtToMove" | "UnderConstruction" | "Resale" | null;
  type?: "Luxury" | "Premium" | "Affordable" | null;
  updatedAt: Date;
  user?: Array<User>;
};
