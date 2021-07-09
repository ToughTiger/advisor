import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyWhereInput = {
  carpet?: IntNullableFilter;
  constructionstart?: DateTimeNullableFilter;
  description?: StringFilter;
  id?: StringFilter;
  isfeatured?: BooleanNullableFilter;
  ispopular?: BooleanNullableFilter;
  isPromoted?: BooleanNullableFilter;
  parking?: IntNullableFilter;
  pin?: StringFilter;
  possession?: DateTimeNullableFilter;
  postedBy?: "Owner" | "Agent" | "Developer";
  projectaddress?: StringFilter;
  projectname?: StringFilter;
  promoteduntil?: DateTimeNullableFilter;
  state?: StringNullableFilter;
  status?: "ReadtToMove" | "UnderConstruction" | "Resale";
  type?: "Luxury" | "Premium" | "Affordable";
};
