import { ConfigurationWhereInput } from "./ConfigurationWhereInput";
import { ConfigurationOrderByInput } from "./ConfigurationOrderByInput";

export type ConfigurationFindManyArgs = {
  where?: ConfigurationWhereInput;
  orderBy?: ConfigurationOrderByInput;
  skip?: number;
  take?: number;
};
