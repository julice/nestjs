import {
  Body,
  Controller,
  Get,
  Headers,
  Inject,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { PersonService } from '../person/person.service';
@Controller('students')
export class StudentsController {
  constructor(
    @Inject('Student') private studentsService: StudentsService,
    @Inject('GetStudent') private getStudentService: void,
    @Inject('GetStudentValue') private getStudentValueService: number[],
    private personService: PersonService,
  ) {}
  // 获取所有数据
  @Get()
  GetStudents() {
    console.log(this.getStudentService, 11);
    console.log(this.getStudentValueService, 221);
    console.log(this.personService.findAll());
    return this.studentsService.getStudent();
  }
  // @Get('getStudentById')
  // GetStudentById(@Request() req) {
  //   const { id } = req.query;
  //   return this.studentsService.getStudentById(parseInt(id));
  // }

  // // 冒号形式拼接动态路由
  // @Get('studentsId/:id/:name')
  // GetsudentsId(@Param() param) {
  //   console.log(param, 'param');
  //   const { id } = param;
  //   return this.studentsService.getStudentById(parseInt(id));
  // }

  @Post('add')
  AddStudent(@Request() req, @Headers() headers) {
    const data = req.body;
    return this.studentsService.addStudent(data);
  }

  @Post('delete')
  DeleteStudent(@Body() body) {
    const { id } = body;
    return this.studentsService.deleteStudent(id);
  }

  @Post('update')
  UpdateStudent(@Body() body) {
    const data = body.data;
    console.log(body, 'body');
    return this.studentsService.updateStudent(data);
  }

  @Post('getStudentByName')
  GetStudentByName(@Body() body) {
    const { name } = body;
    return this.studentsService.getStudentByName(name);
  }
}
