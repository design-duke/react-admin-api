import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // 注册 User 实体到 Repository
  ],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule], // 导出给其他模块（如 AuthModule）使用
})
export class UsersModule {}
