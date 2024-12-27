import "./SubjectTable.css"
import {SchoolYear} from "../../interface/SchoolYear.tsx";
import {Subject} from "../../interface/Subject.tsx";
import GradeBox from "../GradeBox/GradeBox.tsx";

interface Props {
    schoolYear: SchoolYear
}

function SubjectTable({ schoolYear }: Props) {

    const subjects = schoolYear.subjects

    return <>
        <div className="subject-table-div">
            <table className="subject-table">
                <tbody>
                    <tr className="subject-table-row">
                        <th className="subject-table-cell subject-table-cell-subject-name">Subject</th>
                        <th className="subject-table-cell subject-table-cell-subject-grades">Grades</th>
                    </tr>

                    {
                        subjects.map((subject: Subject) => {
                            return <tr className="subject-table-row">
                                <td className="subject-table-cell subject-table-cell-subject-name">{subject.name} - {subject.teacher}</td>
                                <td className="subject-table-cell subject-table-cell-subject-grades">
                                    {
                                        subject.grades.map((grade) => {
                                            return <GradeBox grade={grade}></GradeBox>
                                        })
                                    }
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default SubjectTable