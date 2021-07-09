import { ArgsType, Field } from "@nestjs/graphql";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";

@ArgsType()
class DeletePropertyArgs {
  @Field(() => PropertyWhereUniqueInput, { nullable: false })
  where!: PropertyWhereUniqueInput;
}

export { DeletePropertyArgs };
