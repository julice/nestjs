import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { CounterMiddleware } from '../counter/counter.middleware';
import { PersonService } from '../person/person.service';
@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  // provide:[StudentService],
  // 自定义引入providers
  providers: [
    PersonService,
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

// 局部中间件使用
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 所有的students都执行中间件
    consumer.apply(CounterMiddleware).forRoutes('students');

    // students路由，指定请求类型才执行
    // consumer
    //   .apply(CounterMiddleware)
    //   .forRoutes({ path: 'students', method: RequestMethod.GET });
  }
}
