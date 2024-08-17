import { IsDateString, IsEmail, IsString } from "class-validator";

export class CreateDeveloperDto {

    @IsString()
    name: String;

    @IsEmail()
    email: String;

    @IsDateString()
    dateOfBirth: String;
}
