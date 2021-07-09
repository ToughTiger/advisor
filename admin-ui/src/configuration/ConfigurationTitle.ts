import { Configuration as TConfiguration } from "../api/configuration/Configuration";

export const CONFIGURATION_TITLE_FIELD = "bhktype";

export const ConfigurationTitle = (record: TConfiguration) => {
  return record.bhktype;
};
