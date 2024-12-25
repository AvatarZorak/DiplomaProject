import "./Navbar.css"
import NavbarButtonPlain from "../NavbarButtonPlain/NavbarButtonPlain.tsx";
import Rankings from "../Rankings/Rankings.tsx";

function Navbar() {

    return <>
        <div className="navbar">
            <NavbarButtonPlain type="general"></NavbarButtonPlain>
            <Rankings></Rankings>
            <NavbarButtonPlain type="profile"></NavbarButtonPlain>
        </div>
    </>
}

export default Navbar;