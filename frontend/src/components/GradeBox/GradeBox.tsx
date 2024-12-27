import "./GradeBox.css"
import {useState} from "react";
import {Grade} from "../../interface/Grade.tsx";

interface Props {
    grade: Grade
}

function getColor(grade_number :number) {
    const colors :(string | undefined)[] = [undefined, undefined, "#e9575a", "#e98f62", "#e9db60", "#b2e975", "#71e97b"]

    return {backgroundColor: colors[grade_number]}
}


function GradeBox({ grade }: Props) {

    const [gradePopupState, setGradePopupState] = useState(false)

    return <>

        <div onClick={() => {setGradePopupState(!gradePopupState)}} className="grade" style={getColor(grade.grade)}>
            {grade.grade}
        </div>
        {gradePopupState && <div id="grade-popup" className="grade-popup">
            {grade.expandedGrade} - {grade.description}
        </div>}
    </>
}

export default GradeBox