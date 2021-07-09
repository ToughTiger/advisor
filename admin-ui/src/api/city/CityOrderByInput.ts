import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  propertyId?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};
