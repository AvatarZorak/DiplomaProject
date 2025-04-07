import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from '../interface/student.interface';
import { Model } from 'mongoose';
import { ISchoolYear } from '../interface/school-year.interface';
import { MarkbookYearGetDto } from '../dto/markbook-year-get.dto';
import { jwtDecode } from 'jwt-decode';
import {ProfileYearDto} from "../dto/profile-year.dto";

@Injectable()
export class StudentMarkbookService {
    constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

    getToken(headers) {
        return jwtDecode(headers['authorization'].split(' ')[1]);
    }

    async getStudentById(year: number, headers): Promise<MarkbookYearGetDto> {
        const token = this.getToken(headers);
        const id = token.sub;

        const student = await this.studentModel.findOne({ id: id }).exec();

        if (!student) {
            throw new NotFoundException('Students data not found!');
        }

        const schoolYear: ISchoolYear = student.schoolYears.find(
            (element) => element.year == year,
        );

        return new MarkbookYearGetDto(student.name, schoolYear);
    }

    async getYears(headers) {
        const token = this.getToken(headers);
        const id = token.sub;

        const student = await this.studentModel.findOne({ id: id }).exec();

        if(!student) {
            throw new NotFoundException('Student data not found!');
        }

        const years = student.schoolYears.map((year) => {
            return new ProfileYearDto(year)
        });

        console.log(years);

        return years;
    }
}
