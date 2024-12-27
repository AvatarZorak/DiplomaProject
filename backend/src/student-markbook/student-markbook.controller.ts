import { Controller, Get, Param } from '@nestjs/common';
import { StudentMarkbookService } from './student-markbook.service';

@Controller('student-markbook')
export class StudentMarkbookController {
  constructor(
    private readonly studentMarkbookService: StudentMarkbookService,
  ) {}

  @Get('/:id/:year')
  getStudents(@Param('id') id: number, @Param('year') year: number) {
    return this.studentMarkbookService.getStudentById(id, year);
  }
}
