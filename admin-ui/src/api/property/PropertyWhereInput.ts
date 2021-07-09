import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyWhereInput = {
  carpet?: IntNullableFilter;
  city?: StringFilter;
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
