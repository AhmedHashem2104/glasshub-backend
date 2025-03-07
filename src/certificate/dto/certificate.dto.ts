import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCertificateDto {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  issueDate: string;

  @IsOptional()
  logoPath?: string;

  @IsNotEmpty()
  certificateContent: string;
}
