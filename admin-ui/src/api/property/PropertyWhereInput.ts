import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LocalityWhereUniqueInput } from "../locality/LocalityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PropertyWhereInput = {
  carpet?: IntNullableFilter;
  cities?: CityWhereUniqueInput;
  constructionstart?: DateTimeNullableFilter;
  description?: StringFilter;
  id?: StringFilter;
  isfeatured?: BooleanNullableFilter;
  ispopular?: BooleanNullableFilter;
  isPromoted?: BooleanNullableFilter;
  localities?: LocalityWhereUniqueInput;
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
