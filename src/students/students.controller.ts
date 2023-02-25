import { Controller, Get, Headers, Post, Request } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}
  @Get()
  GetStudents() {
    return this.studentsService.getStudent();
  }
  @Get('getStudentById')
  GetStudentById(@Request() req) {
    const { id } = req.query;
    return this.studentsService.getStudentById(parseInt(id));
  }

  @Get('studentsId/:id')
  GetsudentsId(@Request() req) {
    const { id } = req.params;
    return this.studentsService.getStudentById(parseInt(id));
  }

  @Post('add')
  AddStudent(@Request() req, @Headers() headers) {
    console.log(headers, 'headers');
    const data = req.body;
    return this.studentsService.addStudent(data);
  }
}
