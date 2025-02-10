import './App.css'
import MainPage from "./components/MainPage/MainPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile.tsx";
import {useKeycloak} from "@react-keycloak/web";



function App() {

    // const { keycloak, initialized } = useKeycloak()
    //
    // if(!initialized) {
    //     return <>Loading...</>
    // }
    //
    // if(initialized && !keycloak.authenticated) {
    //     keycloak.login()
    // }

    return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="" index element={<MainPage />}></Route>
                  <Route path="profile" element={<Profile />}></Route>
                  <Route path="2023" element={<MainPage />}></Route>
                  <Route path="2024" element={<MainPage />}></Route>
              </Routes>
          </BrowserRouter>
      </>
    )
}

export default App
