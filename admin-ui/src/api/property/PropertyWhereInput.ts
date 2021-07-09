import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PropertyWhereInput = {
  carpet?: IntNullableFilter;
  city?: StringFilter;
  configuration?: StringNullableFilter;
  constructionstart?: DateTimeNullableFilter;
  description?: StringFilter;
  id?: StringFilter;
  isfeatured?: BooleanNullableFilter;
  ispopular?: BooleanNullableFilter;
  isPromoted?: BooleanNullableFilter;
  locality?: StringNullableFilter;
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
