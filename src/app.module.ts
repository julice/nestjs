import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// orm 对象关系映射
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'test_database',
      retryDelay: 5000,
      retryAttempts: 10,
      // 是否将实体同步到数据库，
      synchronize: true,
      // 自动配置实体
      autoLoadEntities: true,
    }),
    StudentsModule,
  ],
})
export class AppModule {}
