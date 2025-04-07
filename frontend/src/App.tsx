import './App.css'
import MainPage from "./components/MainPage/MainPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile.tsx";
import {useKeycloak} from "@react-keycloak/web";
import {createContext} from "react";

export const TokenContext = createContext<string>("");

function App() {

    const { keycloak, initialized } = useKeycloak()

    if(!initialized) {
        return <>Loading...</>
    }

    if(initialized && !keycloak.authenticated) {
        keycloak.login()
    }

    if(keycloak.token == undefined) {
        return <>Error</>
    }

    return (
        <>
          <TokenContext.Provider value = { keycloak.token }>
              <BrowserRouter>
                  <Routes>
                      <Route path="year/:schoolYear" index element={<MainPage/>}></Route>
                      <Route path="profile" element={<Profile />}></Route>
                  </Routes>
              </BrowserRouter>
          </TokenContext.Provider>
      </>
    )
}

export default App
