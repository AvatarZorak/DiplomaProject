import "./MakrbookBody.css"
import SubjectTable from "../SubjectTable/SubjectTable.tsx";
import {SchoolYear} from "../../interface/SchoolYear.tsx";

interface Props {
    selectedCategory :number
    schoolYear: SchoolYear
}

function MarkbookBody({selectedCategory, schoolYear} :Props) {

    return <>
        <div className="markbook-body">
            {selectedCategory == 0 && <SubjectTable schoolYear={schoolYear}></SubjectTable>}
            {selectedCategory == 1 && <SubjectTable schoolYear={schoolYear}></SubjectTable>}
            {selectedCategory == 2 && <p>hello</p>}
        </div>
    </>
}

export default MarkbookBody