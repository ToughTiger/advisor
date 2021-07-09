import { ArgsType, Field } from "@nestjs/graphql";
import { ConfigurationWhereUniqueInput } from "./ConfigurationWhereUniqueInput";
import { ConfigurationUpdateInput } from "./ConfigurationUpdateInput";

@ArgsType()
class UpdateConfigurationArgs {
  @Field(() => ConfigurationWhereUniqueInput, { nullable: false })
  where!: ConfigurationWhereUniqueInput;
  @Field(() => ConfigurationUpdateInput, { nullable: false })
  data!: ConfigurationUpdateInput;
}

export { UpdateConfigurationArgs };
