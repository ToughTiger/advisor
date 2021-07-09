import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsDate,
  IsString,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { City } from "../../city/base/City";
import { Type } from "class-transformer";
import { Configuration } from "../../configuration/base/Configuration";
import { Locality } from "../../locality/base/Locality";
import { EnumPropertyPostedBy } from "./EnumPropertyPostedBy";
import { EnumPropertyStatus } from "./EnumPropertyStatus";
import { EnumPropertyType } from "./EnumPropertyType";
import { User } from "../../user/base/User";
@ObjectType()
class Property {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  carpet!: number | null;

  @ApiProperty({
    required: false,
    type: () => [City],
  })
  @ValidateNested()
  @Type(() => City)
  @IsOptional()
  cities?: Array<City>;

  @ApiProperty({
    required: false,
    type: () => [Configuration],
  })
  @ValidateNested()
  @Type(() => Configuration)
  @IsOptional()
  configurations?: Array<Configuration>;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  constructionstart!: Date | null;

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
  description!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isfeatured!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  ispopular!: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPromoted!: boolean | null;

  @ApiProperty({
    required: false,
    type: () => [Locality],
  })
  @ValidateNested()
  @Type(() => Locality)
  @IsOptional()
  localities?: Array<Locality>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parking!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  pin!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  possession!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyPostedBy,
  })
  @IsEnum(EnumPropertyPostedBy)
  @IsOptional()
  @Field(() => EnumPropertyPostedBy, {
    nullable: true,
  })
  postedBy?: "Owner" | "Agent" | "Developer" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  projectaddress!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  projectname!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  promoteduntil!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyStatus,
  })
  @IsEnum(EnumPropertyStatus)
  @IsOptional()
  @Field(() => EnumPropertyStatus, {
    nullable: true,
  })
  status?: "ReadtToMove" | "UnderConstruction" | "Resale" | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyType,
  })
  @IsEnum(EnumPropertyType)
  @IsOptional()
  @Field(() => EnumPropertyType, {
    nullable: true,
  })
  type?: "Luxury" | "Premium" | "Affordable" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: Array<User>;
}
export { Property };
