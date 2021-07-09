import { ArgsType, Field } from "@nestjs/graphql";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";
import { PropertyUpdateInput } from "./PropertyUpdateInput";

@ArgsType()
class UpdatePropertyArgs {
  @Field(() => PropertyWhereUniqueInput, { nullable: false })
  where!: PropertyWhereUniqueInput;
  @Field(() => PropertyUpdateInput, { nullable: false })
  data!: PropertyUpdateInput;
}

export { UpdatePropertyArgs };
