import { IsEmail, IsNumber, IsOptional, IsString, Length, Max, Min, MinLength } from "class-validator";

export class PomodoroSettingsdto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    workInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    breakInterval?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(10)
    intervalsCount?: number

}

export class UserDto extends PomodoroSettingsdto {
    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @MinLength(6, {
        message: 'password must be at least 6 characters long'
    })
    @IsString()
    password?: string

}