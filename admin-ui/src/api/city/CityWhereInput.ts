import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CityWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  slug?: StringNullableFilter;
};
