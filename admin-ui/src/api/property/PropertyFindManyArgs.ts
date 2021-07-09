import { PropertyWhereInput } from "./PropertyWhereInput";
import { PropertyOrderByInput } from "./PropertyOrderByInput";

export type PropertyFindManyArgs = {
  where?: PropertyWhereInput;
  orderBy?: PropertyOrderByInput;
  skip?: number;
  take?: number;
};
