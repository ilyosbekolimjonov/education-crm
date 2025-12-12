import { IsString, IsOptional, IsEnum, IsNotEmpty } from "class-validator";
import { Status } from '@prisma/client';

export class CreateBranchDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    logoUrl?: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsEnum(Status)
    @IsOptional()
    status?: Status;
}