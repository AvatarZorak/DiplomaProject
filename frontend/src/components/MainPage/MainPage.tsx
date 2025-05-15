import Navbar from "../Navbar/Navbar.tsx";
import Body from "../Body/Body.tsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import { MainPageStudentInformation } from "../../interface/MainPageStudentInformation.tsx";
import {TokenContext} from "../../App.tsx";
import {useLocation} from "react-router-dom";

function MainPage() {
    const token = useContext(TokenContext);

    const [studentData, setStudentData] = useState<MainPageStudentInformation>();

    const { pathname } = useLocation();

    const schoolYear = pathname.toString().split("/").pop();

    useEffect(() => {
        axios.get(`https://ahristov.itgix.eu/student-markbook/year/${schoolYear}`, {
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        }).then(
            response => {
                setStudentData(response.data)
            }
        ).catch(err => {
            return <>Server error! {err} </>
        })
    }, []);

    if(studentData == undefined) {
        return <>Error fetching student information!</>
    }

    return <>
        <Navbar name={studentData.name}></Navbar>
        <Body schoolYear={studentData.schoolYear}></Body>
    </>
}

export default MainPage;