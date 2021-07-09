import { Locality as TLocality } from "../api/locality/Locality";

export const LOCALITY_TITLE_FIELD = "name";

export const LocalityTitle = (record: TLocality) => {
  return record.name;
};
