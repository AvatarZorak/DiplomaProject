import { Controller, Get } from '@nestjs/common';
import { StudentMarkbookService } from './student-markbook.service';

@Controller('student-markbook')
export class StudentMarkbookController {
  constructor(private readonly studentMarkbookService: StudentMarkbookService,) {}

  @Get()
  getStudents() {
    return this.studentMarkbookService.getStudents();
  }
}
