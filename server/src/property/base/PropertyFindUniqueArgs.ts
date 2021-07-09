import { ArgsType, Field } from "@nestjs/graphql";
import { PropertyWhereUniqueInput } from "./PropertyWhereUniqueInput";

@ArgsType()
class PropertyFindUniqueArgs {
  @Field(() => PropertyWhereUniqueInput, { nullable: false })
  where!: PropertyWhereUniqueInput;
}

export { PropertyFindUniqueArgs };
