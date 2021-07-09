import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConfigurationWhereInput } from "./ConfigurationWhereInput";
import { Type } from "class-transformer";
import { ConfigurationOrderByInput } from "./ConfigurationOrderByInput";

@ArgsType()
class ConfigurationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConfigurationWhereInput,
  })
  @Field(() => ConfigurationWhereInput, { nullable: true })
  @Type(() => ConfigurationWhereInput)
  where?: ConfigurationWhereInput;

  @ApiProperty({
    required: false,
    type: ConfigurationOrderByInput,
  })
  @Field(() => ConfigurationOrderByInput, { nullable: true })
  @Type(() => ConfigurationOrderByInput)
  orderBy?: ConfigurationOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConfigurationFindManyArgs };
