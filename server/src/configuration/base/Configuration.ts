import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Property } from "../../property/base/Property";
@ObjectType()
class Configuration {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  bhktype!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Property],
  })
  @ValidateNested()
  @Type(() => Property)
  @IsOptional()
  properties?: Array<Property>;

  @ApiProperty({
    required: false,
    type: () => [Property],
  })
  @ValidateNested()
  @Type(() => Property)
  @IsOptional()
  property?: Array<Property>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Configuration };
