import { registerEnumType } from "@nestjs/graphql";

export enum EnumPropertyPostedBy {
  Owner = "Owner",
  Agent = "Agent",
  Developer = "Developer",
}

registerEnumType(EnumPropertyPostedBy, {
  name: "EnumPropertyPostedBy",
});
