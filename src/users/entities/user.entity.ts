import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, unique: true }) // ← 用户名必须唯一
  username: string; // ← 新增或替换 email

  // @Column({ length: 100 })
  // name: string;

  // 如果你还保留 email，可以留着（非登录用）
  // @Column({ nullable: true })
  // email?: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
