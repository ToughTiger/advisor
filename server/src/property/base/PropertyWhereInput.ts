import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { CityWhereUniqueInput } from "../../city/base/CityWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LocalityWhereUniqueInput } from "../../locality/base/LocalityWhereUniqueInput";
import { EnumPropertyPostedBy } from "./EnumPropertyPostedBy";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumPropertyStatus } from "./EnumPropertyStatus";
import { EnumPropertyType } from "./EnumPropertyType";
@InputType()
class PropertyWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  carpet?: IntNullableFilter;

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
  cities?: CityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  constructionstart?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isfeatured?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  ispopular?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isPromoted?: BooleanNullableFilter;

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
  localities?: LocalityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  parking?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  pin?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  possession?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPropertyPostedBy,
  })
  @IsEnum(EnumPropertyPostedBy)
  @IsOptional()
  @Field(() => EnumPropertyPostedBy, {
    nullable: true,
  })
  postedBy?: "Owner" | "Agent" | "Developer";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  projectaddress?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  projectname?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  promoteduntil?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  state?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPropertyStatus,
  })
  @IsEnum(EnumPropertyStatus)
  @IsOptional()
  @Field(() => EnumPropertyStatus, {
    nullable: true,
  })
  status?: "ReadtToMove" | "UnderConstruction" | "Resale";

  @ApiProperty({
    required: false,
    enum: EnumPropertyType,
  })
  @IsEnum(EnumPropertyType)
  @IsOptional()
  @Field(() => EnumPropertyType, {
    nullable: true,
  })
  type?: "Luxury" | "Premium" | "Affordable";
}
export { PropertyWhereInput };
