import { ISchoolYear } from '../interface/school-year.interface';

export class ProfileYearDto {
    year: number;

    constructor(schoolYear: ISchoolYear) {
        this.year = schoolYear.year;
    }
}
