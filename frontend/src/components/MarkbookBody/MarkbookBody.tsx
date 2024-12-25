import "./MakrbookBody.css"
import SubjectTable from "../SubjectTable/SubjectTable.tsx";

interface Props {
    selectedCategory :number
}

function MarkbookBody({selectedCategory} :Props) {

    return <>
        <div className="markbook-body">
            {selectedCategory == 0 && <SubjectTable></SubjectTable>}
            {selectedCategory == 1 && <SubjectTable></SubjectTable>}
            {selectedCategory == 2 && <p>hello</p>}
        </div>
    </>
}

export default MarkbookBody