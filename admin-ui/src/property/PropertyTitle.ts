import { Property as TProperty } from "../api/property/Property";

export const PROPERTY_TITLE_FIELD = "projectname";

export const PropertyTitle = (record: TProperty) => {
  return record.projectname;
};
