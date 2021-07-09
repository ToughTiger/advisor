import { ArgsType, Field } from "@nestjs/graphql";
import { LocalityWhereUniqueInput } from "./LocalityWhereUniqueInput";
import { LocalityUpdateInput } from "./LocalityUpdateInput";

@ArgsType()
class UpdateLocalityArgs {
  @Field(() => LocalityWhereUniqueInput, { nullable: false })
  where!: LocalityWhereUniqueInput;
  @Field(() => LocalityUpdateInput, { nullable: false })
  data!: LocalityUpdateInput;
}

export { UpdateLocalityArgs };
