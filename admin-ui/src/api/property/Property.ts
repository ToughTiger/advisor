import { City } from "../city/City";
import { Configuration } from "../configuration/Configuration";
import { Locality } from "../locality/Locality";
import { User } from "../user/User";

export type Property = {
  carpet: number | null;
  cities?: Array<City>;
  city: string;
  configuration: string | null;
  configurations?: Array<Configuration>;
  constructionstart: Date | null;
  createdAt: Date;
  description: string;
  id: string;
  isfeatured: boolean | null;
  ispopular: boolean | null;
  isPromoted: boolean | null;
  localities?: Array<Locality>;
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
