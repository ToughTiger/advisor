import { InputType, Field } from "@nestjs/graphql";
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
import { CityWhereUniqueInput } from "../../city/base/CityWhereUniqueInput";
import { Type } from "class-transformer";
import { LocalityWhereUniqueInput } from "../../locality/base/LocalityWhereUniqueInput";
import { EnumPropertyPostedBy } from "./EnumPropertyPostedBy";
import { EnumPropertyStatus } from "./EnumPropertyStatus";
import { EnumPropertyType } from "./EnumPropertyType";
@InputType()
class PropertyUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  carpet?: number | null;

  @ApiProperty({
    required: false,
    type: () => CityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CityWhereUniqueInput)
  @IsOptional()
  @Field(() => CityWhereUniqueInput, {
    nullable: true,
  })
  cities?: CityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  constructionstart?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isfeatured?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  ispopular?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPromoted?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => LocalityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocalityWhereUniqueInput)
  @IsOptional()
  @Field(() => LocalityWhereUniqueInput, {
    nullable: true,
  })
  localities?: LocalityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  parking?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  pin?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  possession?: Date | null;

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
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  projectaddress?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  projectname?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  promoteduntil?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

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
}
export { PropertyUpdateInput };
