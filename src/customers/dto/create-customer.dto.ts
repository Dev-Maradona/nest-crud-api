import { IsNumberString, IsString, IsEmail, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateCustomerDto {

    // @IsNotEmpty()
    // @IsNumberString()
    // id: number;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @Min(8)
    password: string;
}