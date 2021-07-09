import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PropertyWhereInput } from "./PropertyWhereInput";
import { Type } from "class-transformer";
import { PropertyOrderByInput } from "./PropertyOrderByInput";

@ArgsType()
class PropertyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PropertyWhereInput,
  })
  @Field(() => PropertyWhereInput, { nullable: true })
  @Type(() => PropertyWhereInput)
  where?: PropertyWhereInput;

  @ApiProperty({
    required: false,
    type: PropertyOrderByInput,
  })
  @Field(() => PropertyOrderByInput, { nullable: true })
  @Type(() => PropertyOrderByInput)
  orderBy?: PropertyOrderByInput;

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

export { PropertyFindManyArgs };
