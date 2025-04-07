import { Controller, Get, Headers, Param, UseGuards } from '@nestjs/common';
import { StudentMarkbookService } from './student-markbook.service';
import { AuthGuard } from 'nest-keycloak-connect';

@UseGuards(AuthGuard)
@Controller('student-markbook')
export class StudentMarkbookController {
    constructor(
        private readonly studentMarkbookService: StudentMarkbookService,
    ) {}

    @Get('/year/:year')
    getStudents(@Param('year') year: number, @Headers() headers) {
        return this.studentMarkbookService.getStudentById(year, headers);
    }

    @Get('/years')
    getYears(@Headers() headers) {
        return this.studentMarkbookService.getYears(headers);
    }
}
