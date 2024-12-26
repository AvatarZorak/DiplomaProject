import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IStudent } from '../interface/student.interface';
import { Model } from 'mongoose';

@Injectable()
export class StudentMarkbookService {
  constructor(@InjectModel('Student') private studentModel: Model<IStudent>) {}

  async getStudents(): Promise<IStudent[]> {
    const student = await this.studentModel.find();

    if (!student || student.length == 0) {
      throw new NotFoundException('Students data not found!');
    }

    return student;
  }
}
