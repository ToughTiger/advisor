import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type CityUpdateInput = {
  name?: string;
  property?: PropertyWhereUniqueInput | null;
  slug?: string | null;
};
