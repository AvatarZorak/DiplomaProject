import "./SubjectTable.css"
import Grade from "../Grade/Grade.tsx";

interface Grade {
    grade_number :number
    description :string
}

interface Subject {
    name :string
    grades :Grade[]
}

function SubjectTable() {
    const subjects :Subject[] = [
        {
            name: "Math",
            grades: [{grade_number: 6, description: "smth"}, {grade_number: 4, description: "smth2"}]
        },
        {
            name: "BEL",
            grades: []
        },
        {
            name: "Biology",
            grades: [{grade_number: 5, description: "smth3"}]
        }
    ]

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
                                <td className="subject-table-cell subject-table-cell-subject-name">{subject.name}</td>
                                <td className="subject-table-cell subject-table-cell-subject-grades">
                                    {
                                        subject.grades.map((grade :Grade) => {
                                            return <Grade grade_number={grade.grade_number} description={grade.description}></Grade>
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