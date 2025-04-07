import "./SubjectTable.css"
import {SchoolYear} from "../../interface/SchoolYear.tsx";
import {Subject} from "../../interface/Subject.tsx";
import GradeBox from "../GradeBox/GradeBox.tsx";
import subjectTableType from "../../enum/subjectTableType.enum.tsx";

interface Props {
    schoolYear: SchoolYear
    type: subjectTableType
}

function SubjectTable({ schoolYear, type }: Props) {

    const subjects = schoolYear.subjects

    return <>
        <div className="subject-table-div">
            <table className="subject-table">
                <tbody>
                    <tr className="subject-table-row">
                        <th className="subject-table-cell subject-table-cell-subject-name">Предмет</th>
                        {
                            type == subjectTableType.grades &&
                            <th className="subject-table-cell subject-table-cell-subject-grades">Оценки</th>
                        }
                        {
                            type == subjectTableType.remarks &&
                            <th className="subject-table-cell subject-table-cell-subject-grades">Забележки</th>
                        }
                        {
                            type == subjectTableType.commendations &&
                            <th className="subject-table-cell subject-table-cell-subject-grades">Похвали</th>
                        }
                        {
                            type == subjectTableType.absences &&
                            <th className="subject-table-cell subject-table-cell-subject-grades">Отсъствия</th>
                        }
                    </tr>

                    {
                        subjects.map((subject: Subject) => {
                            return <tr className="subject-table-row">
                                <td className="subject-table-cell subject-table-cell-subject-name">{subject.name} - {subject.teacher}</td>
                                {
                                    type == subjectTableType.grades &&
                                    <td className="subject-table-cell subject-table-cell-subject-grades">
                                        {
                                            subject.grades.map((grade) => {
                                                return <GradeBox grade={grade}></GradeBox>
                                            })
                                        }
                                    </td>
                                }
                                {
                                    type == subjectTableType.remarks &&
                                    <td className="subject-table-cell subject-table-cell-subject-grades">
                                        {
                                            subject.remarks.map((remark) => {
                                                return "hello"
                                            })
                                        }
                                    </td>
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default SubjectTable