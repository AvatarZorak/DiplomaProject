import "./MakrbookBody.css"
import SubjectTable from "../SubjectTable/SubjectTable.tsx";
import {SchoolYear} from "../../interface/SchoolYear.tsx";

interface Props {
    selectedCategory: number
    schoolYear: SchoolYear
}

function MarkbookBody({selectedCategory, schoolYear} :Props) {

    return <>
        <div className="markbook-body">
            <SubjectTable schoolYear={schoolYear} type={selectedCategory}></SubjectTable>
        </div>
    </>
}

export default MarkbookBody