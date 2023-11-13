import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Files {
  @PrimaryGeneratedColumn()
  FileID: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  FileType: string;

  @Column({ type: 'varchar', length: 3000,  nullable: false })
  File: Buffer;

  @Column({ type: 'int', nullable: false })
  Grade: number;

  @Column({ type: 'int', nullable: false })
  Year: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  Semester: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  Exam: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  Subject: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  Type: string;
}
