import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Certificate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  issueDate: string;

  @Column({ nullable: true })
  logoPath: string;

  @Column({ type: 'text' })
  certificateContent: string;
}
