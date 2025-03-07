import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate } from './certificate.entity';
import { CreateCertificateDto } from './dto/certificate.dto';

@Injectable()
export class CertificateService {
  constructor(
    @InjectRepository(Certificate)
    private certificateRepo: Repository<Certificate>,
  ) {}

  async create(data: CreateCertificateDto): Promise<Certificate> {
    return this.certificateRepo.save(data);
  }

  async findAll(): Promise<Certificate[]> {
    return this.certificateRepo.find();
  }
  async findOne(id: number): Promise<Certificate> {
    const certificate = await this.certificateRepo.findOne({ where: { id } });
    if (!certificate) {
      throw new Error('Certificate not found');
    }
    return certificate;
  }
}
