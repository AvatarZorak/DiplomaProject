import "./MarkbookCard.css"
import {Link} from "react-router-dom";

interface Props {
    year :number
}

function MarkbookCard({year} :Props) {

    return <>
        <Link to={"/" + year.toString()} className="markbook-card">{year}</Link>
    </>
}

export default MarkbookCard