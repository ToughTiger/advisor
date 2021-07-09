import { ArgsType, Field } from "@nestjs/graphql";
import { LocalityWhereUniqueInput } from "./LocalityWhereUniqueInput";

@ArgsType()
class DeleteLocalityArgs {
  @Field(() => LocalityWhereUniqueInput, { nullable: false })
  where!: LocalityWhereUniqueInput;
}

export { DeleteLocalityArgs };
