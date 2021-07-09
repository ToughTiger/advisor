import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LocalityWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  slug?: StringNullableFilter;
};
