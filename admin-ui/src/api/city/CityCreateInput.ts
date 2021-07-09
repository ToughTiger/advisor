import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type CityCreateInput = {
  name: string;
  property?: PropertyWhereUniqueInput | null;
  slug?: string | null;
};
