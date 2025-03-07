import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CertificateService } from './certificate.service';
import { CertificateController } from './certificate.controller';
import { Certificate } from './certificate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Certificate])], // Register Certificate Entity
  providers: [CertificateService],
  controllers: [CertificateController],
  exports: [CertificateService], // Export the service if needed elsewhere
})
export class CertificateModule {}
