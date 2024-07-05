/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AplicacionWhereInput } from "./AplicacionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AplicacionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AplicacionWhereInput,
  })
  @ValidateNested()
  @Type(() => AplicacionWhereInput)
  @IsOptional()
  @Field(() => AplicacionWhereInput, {
    nullable: true,
  })
  every?: AplicacionWhereInput;

  @ApiProperty({
    required: false,
    type: () => AplicacionWhereInput,
  })
  @ValidateNested()
  @Type(() => AplicacionWhereInput)
  @IsOptional()
  @Field(() => AplicacionWhereInput, {
    nullable: true,
  })
  some?: AplicacionWhereInput;

  @ApiProperty({
    required: false,
    type: () => AplicacionWhereInput,
  })
  @ValidateNested()
  @Type(() => AplicacionWhereInput)
  @IsOptional()
  @Field(() => AplicacionWhereInput, {
    nullable: true,
  })
  none?: AplicacionWhereInput;
}
export { AplicacionListRelationFilter as AplicacionListRelationFilter };
