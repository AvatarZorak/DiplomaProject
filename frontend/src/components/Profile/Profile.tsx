import "./Profile.css"
import {TokenContext} from "../../App.tsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ProfileYearCard} from "../../interface/ProfileYearCard.tsx";
import MarkbookProfileCard from "../MarkbookProfileCard/MarkbookProfileCard.tsx"

function Profile() {

    const token = useContext(TokenContext);

    const [profileYearCards, setProfileYearCards] = useState<ProfileYearCard[]>();

    useEffect(() => {
        axios.get("https://ahristov.itgix.eu/student-markbook/years", {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(response => {
            setProfileYearCards(response.data)
        });
    }, []);

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
            { profileYearCards &&
                profileYearCards.map((yearCard) => {
                    return <MarkbookProfileCard yearCard={yearCard}></MarkbookProfileCard>
                })
            }
        </div>
    </>
}

export default Profile