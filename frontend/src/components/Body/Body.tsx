import "./Body.css"
import Categories from "../Categories/Categories.tsx";
import MarkbookBody from "../MarkbookBody/MarkbookBody.tsx";
import {useState} from "react";
import {SchoolYear} from "../../interface/SchoolYear.tsx";

interface Props {
    schoolYear: SchoolYear;
}

function Body({ schoolYear }: Props) {

    const [selectedCategory, setSelectedCategory] = useState(0)

    return <>
        <div className="body">
            <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}></Categories>
            <MarkbookBody selectedCategory={selectedCategory} schoolYear={schoolYear}></MarkbookBody>
        </div>
    </>
}

export default Body;