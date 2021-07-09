import { ArgsType, Field } from "@nestjs/graphql";
import { LocalityCreateInput } from "./LocalityCreateInput";

@ArgsType()
class CreateLocalityArgs {
  @Field(() => LocalityCreateInput, { nullable: false })
  data!: LocalityCreateInput;
}

export { CreateLocalityArgs };
