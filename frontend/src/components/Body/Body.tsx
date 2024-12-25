import "./Body.css"
import Categories from "../Categories/Categories.tsx";
import MarkbookBody from "../MarkbookBody/MarkbookBody.tsx";
import {useState} from "react";

function Body() {

    const [selectedCategory, setSelectedCategory] = useState(0)

    return <>
        <div className="body">
            <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}></Categories>
            <MarkbookBody selectedCategory={selectedCategory}></MarkbookBody>
        </div>
    </>
}

export default Body;