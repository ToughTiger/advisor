import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ConfigurationWhereInput = {
  bhktype?: StringFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
