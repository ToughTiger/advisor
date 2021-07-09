import { ArgsType, Field } from "@nestjs/graphql";
import { ConfigurationWhereUniqueInput } from "./ConfigurationWhereUniqueInput";

@ArgsType()
class DeleteConfigurationArgs {
  @Field(() => ConfigurationWhereUniqueInput, { nullable: false })
  where!: ConfigurationWhereUniqueInput;
}

export { DeleteConfigurationArgs };
