import { Test, TestingModule } from '@nestjs/testing';
import { StudentMarkbookController } from './student-markbook.controller';

describe('StudentMarkbookController', () => {
  let controller: StudentMarkbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentMarkbookController],
    }).compile();

    controller = module.get<StudentMarkbookController>(StudentMarkbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
