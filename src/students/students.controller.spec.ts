import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';

describe('StudentsController', () => {
  let controller: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.GetStudentById({ query: 1 })).toBe({
        errcode: '0000',
        data: {
          id: 2,
          name: 'xiaofang',
          age: 3,
        },
      });
    });
  });
});
