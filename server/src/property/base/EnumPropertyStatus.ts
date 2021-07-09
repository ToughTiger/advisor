import { registerEnumType } from "@nestjs/graphql";

export enum EnumPropertyStatus {
  ReadtToMove = "ReadtToMove",
  UnderConstruction = "UnderConstruction",
  Resale = "Resale",
}

registerEnumType(EnumPropertyStatus, {
  name: "EnumPropertyStatus",
});
