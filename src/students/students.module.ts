import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  // provide:[StudentService],
  // 自定义引入providers
  providers: [
    {
      provide: 'Student',
      useClass: StudentsService,
    },
    {
      provide: 'GetStudent',
      useFactory: () => {
        console.log('211133');
        return 22;
      },
    },
    { provide: 'GetStudentValue', useValue: [1, 2, 3] },
  ],
})
export class StudentsModule {}
