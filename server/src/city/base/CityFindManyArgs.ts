import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CityWhereInput } from "./CityWhereInput";
import { Type } from "class-transformer";
import { CityOrderByInput } from "./CityOrderByInput";

@ArgsType()
class CityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CityWhereInput,
  })
  @Field(() => CityWhereInput, { nullable: true })
  @Type(() => CityWhereInput)
  where?: CityWhereInput;

  @ApiProperty({
    required: false,
    type: CityOrderByInput,
  })
  @Field(() => CityOrderByInput, { nullable: true })
  @Type(() => CityOrderByInput)
  orderBy?: CityOrderByInput;

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

export { CityFindManyArgs };
