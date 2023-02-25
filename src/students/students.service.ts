import { Injectable } from '@nestjs/common';

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
  getStudent() {
    return {
      id: 1,
      name: 'xiaofang',
    };
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
    studentsList.push(person);
    return {
      errcode: '0000',
      data: studentsList,
    };
  }
}
