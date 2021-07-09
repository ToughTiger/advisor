import { registerEnumType } from "@nestjs/graphql";

export enum EnumPropertyType {
  Luxury = "Luxury",
  Premium = "Premium",
  Affordable = "Affordable",
}

registerEnumType(EnumPropertyType, {
  name: "EnumPropertyType",
});
