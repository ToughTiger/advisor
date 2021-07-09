import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsString,
  IsDate,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPropertyPostedBy } from "./EnumPropertyPostedBy";
import { EnumPropertyStatus } from "./EnumPropertyStatus";
import { EnumPropertyType } from "./EnumPropertyType";
@InputType()
class PropertyCreateInput {
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  locality?: string | null;

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
export { PropertyCreateInput };
