import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Student } from './entities/student.entity';

const studentsList = [
  {
    id: 1,
    name: 'fangxiao',
    age: 2,
  },
  {
    id: 2,
    name: 'xiaofang',
    age: 3,
  },
  {
    id: 3,
    name: 'fangxiaoxiao',
    age: 4,
  },
];

@Injectable()
export class StudentsService {
  // 依赖注录
  constructor(
    @InjectRepository(Student) private readonly student: Repository<Student>,
  ) {}
  getStudent() {
    return this.student.find();
  }

  getStudentById(id: number) {
    if (isNaN(id)) {
      return {
        errcode: '60001',
        msg: 'id is not a number',
      };
    }
    if (studentsList[id]) {
      return {
        errcode: '0000',
        data: studentsList[id],
      };
    }
    return {
      errcode: '60001',
      msg: 'no data',
    };
  }

  addStudent(person) {
    if (!person) {
      return {
        errcode: '60001',
        msg: '数据格式错误',
      };
    }
    const data = new Student();
    data.name = person.name;
    data.age = parseInt(person.age, 10);
    return this.student.save(data);
  }

  deleteStudent(id: string) {
    if (!id) {
      return {
        errcode: '60001',
        msg: '数据格式错误',
      };
    }
    return this.student.delete(id);
  }

  // update(id,数据)
  updateStudent(person) {
    if (!person) {
      return {
        errcode: '60001',
        msg: '数据格式错误',
      };
    }
    const data = new Student();
    data.name = person.name;
    data.age = person.age;
    return this.student.update(person.id, data);
  }

  async getStudentByName(name: string) {
    if (!name) {
      return {
        errcode: '60001',
        msg: '数据格式错误',
      };
    }
    const data = await this.student.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
    console.log(data, 'data');
    return {
      errcode: '0000',
      data: data,
    };
  }
}
