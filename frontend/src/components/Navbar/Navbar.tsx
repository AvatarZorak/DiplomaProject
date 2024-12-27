import "./Navbar.css"
import NavbarButtonPlain from "../NavbarButtonPlain/NavbarButtonPlain.tsx";
import Rankings from "../Rankings/Rankings.tsx";

interface Props {
    name: string;
}

function Navbar({ name }: Props) {

    return <>
        <div className="navbar">
            <NavbarButtonPlain type="general"></NavbarButtonPlain>
            <Rankings></Rankings>
            <NavbarButtonPlain type="profile" name={name}></NavbarButtonPlain>
        </div>
    </>
}

export default Navbar;