import { ArgsType, Field } from "@nestjs/graphql";
import { CityWhereUniqueInput } from "./CityWhereUniqueInput";

@ArgsType()
class CityFindUniqueArgs {
  @Field(() => CityWhereUniqueInput, { nullable: false })
  where!: CityWhereUniqueInput;
}

export { CityFindUniqueArgs };
