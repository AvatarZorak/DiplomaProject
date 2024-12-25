import "./Grade.css"
import {useState} from "react";

interface Props {
    grade_number :number
    description :string
}

function getColor(grade_number :number) {
    const colors :(string | undefined)[] = [undefined, undefined, "#e9575a", "#e98f62", "#e9db60", "#b2e975", "#71e97b"]

    return {backgroundColor: colors[grade_number]}
}


function Grade({grade_number, description}: Props) {

    const [gradePopupState, setGradePopupState] = useState(false)

    return <>

        <div onClick={() => {setGradePopupState(!gradePopupState)}} className="grade" style={getColor(grade_number)}>
            {grade_number}
        </div>
        {gradePopupState && <div id="grade-popup" className="grade-popup">
            {description}
        </div>}
    </>
}

export default Grade