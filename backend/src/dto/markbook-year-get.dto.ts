import { ISchoolYear } from '../interface/school-year.interface';

export class MarkbookYearGetDto {
    name: string;
    schoolYear: ISchoolYear;

    constructor(name: string, schoolYear: ISchoolYear) {
        this.name = name;
        this.schoolYear = schoolYear;
    }
}
