import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from '../interface/student.interface';
import { Model } from 'mongoose';
import { ISchoolYear } from '../interface/school-year.interface';
import { MarkbookYearGetDto } from '../dto/markbook-year-get.dto';

@Injectable()
export class StudentMarkbookService {
  constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

  async getStudentById(id: number, year: number): Promise<MarkbookYearGetDto> {
    const student = await this.studentModel.findOne({ id: id }).exec();

    if (!student) {
      throw new NotFoundException('Students data not found!');
    }

    const schoolYear: ISchoolYear = student.schoolYears.find(
      (element) => element.year == year,
    );

    return new MarkbookYearGetDto(student.name, schoolYear);
  }
}
