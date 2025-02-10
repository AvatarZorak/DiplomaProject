import Navbar from "../Navbar/Navbar.tsx";
import Body from "../Body/Body.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {MainPageStudentInformation} from "../../interface/MainPageStudentInformation.tsx";
import {useKeycloak} from "@react-keycloak/web";

function MainPage() {

    const id: number = 1
    const year: number = 2024

    const [studentData, setStudentData] = useState<MainPageStudentInformation>()

    // const { keycloak } = useKeycloak()
    //
    // console.log(keycloak.token)

    useEffect(() => {
        axios.get(`http://localhost:5000/student-markbook/${id}/${year}`, {
            headers: {
                // "Authorization": 'Bearer ' + keycloak.token,
                "Content-Type": "application/json"
            }
        }).then(
            response => {
                setStudentData(response.data)
            }
        ).catch(err => {
            return <>Server error! {err} </>
        })
    }, [])

    if(studentData == undefined) {
        return <>Error fetching student information!</>
    }

    return <>
        <Navbar name={studentData.name}></Navbar>
        <Body schoolYear={studentData.schoolYear}></Body>
    </>
}

export default MainPage;