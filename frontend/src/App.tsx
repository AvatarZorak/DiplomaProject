import './App.css'
import MainPage from "./components/MainPage/MainPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<MainPage />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="2023" element={<MainPage />}></Route>
                <Route path="2024" element={<MainPage />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
