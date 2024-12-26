import { Test, TestingModule } from '@nestjs/testing';
import { StudentMarkbookService } from './student-markbook.service';

describe('StudentMarkbookService', () => {
  let service: StudentMarkbookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentMarkbookService],
    }).compile();

    service = module.get<StudentMarkbookService>(StudentMarkbookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
