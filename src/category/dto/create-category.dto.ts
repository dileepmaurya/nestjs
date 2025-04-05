import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 150)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(5, 250)
    description: string;

    @IsBoolean()
    isActive: boolean;
}