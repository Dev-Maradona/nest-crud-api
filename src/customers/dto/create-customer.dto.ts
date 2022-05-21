import { IsNumberString, IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class createCustomerDto {

    @IsNotEmpty()
    @IsNumberString()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}