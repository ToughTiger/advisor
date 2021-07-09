import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocalityWhereInput } from "./LocalityWhereInput";
import { Type } from "class-transformer";
import { LocalityOrderByInput } from "./LocalityOrderByInput";

@ArgsType()
class LocalityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocalityWhereInput,
  })
  @Field(() => LocalityWhereInput, { nullable: true })
  @Type(() => LocalityWhereInput)
  where?: LocalityWhereInput;

  @ApiProperty({
    required: false,
    type: LocalityOrderByInput,
  })
  @Field(() => LocalityOrderByInput, { nullable: true })
  @Type(() => LocalityOrderByInput)
  orderBy?: LocalityOrderByInput;

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

export { LocalityFindManyArgs };
