import { ArgsType, Field } from "@nestjs/graphql";
import { PropertyCreateInput } from "./PropertyCreateInput";

@ArgsType()
class CreatePropertyArgs {
  @Field(() => PropertyCreateInput, { nullable: false })
  data!: PropertyCreateInput;
}

export { CreatePropertyArgs };
