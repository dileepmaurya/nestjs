import { Type } from "class-transformer";
import { IsDecimal, IsNotEmpty, IsNumber, IsString, Length, Min } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 250)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(5, 1000)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    quantity: number;

    @IsNotEmpty()
    @IsString()
    category: string;
}