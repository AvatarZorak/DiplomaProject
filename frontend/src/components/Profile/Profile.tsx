import "./Profile.css"
import MarkbookCard from "../MarkbookCard/MarkbookCard.tsx";

function Profile() {

    return <>
        <div className="profile-card">
            <div className="profile-picture">
                snimchica
            </div>
            <div className="profile-description">
                opisaniice
            </div>
        </div>
        <div className="markbooks">
            <MarkbookCard year={2023}></MarkbookCard>
            <MarkbookCard year={2024}></MarkbookCard>
        </div>
    </>
}

export default Profile