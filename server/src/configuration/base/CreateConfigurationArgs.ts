import { ArgsType, Field } from "@nestjs/graphql";
import { ConfigurationCreateInput } from "./ConfigurationCreateInput";

@ArgsType()
class CreateConfigurationArgs {
  @Field(() => ConfigurationCreateInput, { nullable: false })
  data!: ConfigurationCreateInput;
}

export { CreateConfigurationArgs };
