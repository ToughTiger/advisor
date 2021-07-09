import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CityWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  property?: PropertyWhereUniqueInput;
  slug?: StringNullableFilter;
};
