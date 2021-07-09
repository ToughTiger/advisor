import { ArgsType, Field } from "@nestjs/graphql";
import { LocalityWhereUniqueInput } from "./LocalityWhereUniqueInput";

@ArgsType()
class LocalityFindUniqueArgs {
  @Field(() => LocalityWhereUniqueInput, { nullable: false })
  where!: LocalityWhereUniqueInput;
}

export { LocalityFindUniqueArgs };
