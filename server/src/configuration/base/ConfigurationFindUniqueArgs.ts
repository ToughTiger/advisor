import { ArgsType, Field } from "@nestjs/graphql";
import { ConfigurationWhereUniqueInput } from "./ConfigurationWhereUniqueInput";

@ArgsType()
class ConfigurationFindUniqueArgs {
  @Field(() => ConfigurationWhereUniqueInput, { nullable: false })
  where!: ConfigurationWhereUniqueInput;
}

export { ConfigurationFindUniqueArgs };
