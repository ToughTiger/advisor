import { CityWhereInput } from "./CityWhereInput";
import { CityOrderByInput } from "./CityOrderByInput";

export type CityFindManyArgs = {
  where?: CityWhereInput;
  orderBy?: CityOrderByInput;
  skip?: number;
  take?: number;
};
