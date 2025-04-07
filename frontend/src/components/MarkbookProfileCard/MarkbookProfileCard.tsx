import "./MarkbookProfileCard.css"
import {Link} from "react-router-dom";
import {ProfileYearCard} from "../../interface/ProfileYearCard.tsx";

interface Props {
    yearCard: ProfileYearCard
}

function MarkbookProfileCard({yearCard} :Props) {

    return <>
        <Link to={"/year/" + yearCard.year} className="markbook-card">
            <span className="year">Година: {yearCard.year}</span>
        </Link>
    </>
}

export default MarkbookProfileCard