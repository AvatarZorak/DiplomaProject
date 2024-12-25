import "./NavbarButtonPlain.css"
import { HiOutlineUserCircle } from "react-icons/hi"
import { BsSend } from "react-icons/bs"
import {Link} from "react-router-dom";


interface Props {
    type :string
}

function NavbarButtonPlain({type} :Props) {
    const name :string = "Alexandar Hristov"

    return <>
        {type == "general" &&
        <div className="navbar-button-plain" style={{borderBottomRightRadius: "25px"}}>
        </div>
        }

        {type == "profile" &&
        <div className="navbar-button-plain" style={{borderBottomLeftRadius: "25px"}}>
            <BsSend className="messages-icon"></BsSend>
            <Link to="/profile" className="profile-tab">
                <HiOutlineUserCircle className="profile-icon"></HiOutlineUserCircle>
                <h3 className="profile-name">
                    {name}
                </h3>
            </Link>
        </div>
        }
    </>
}

export default NavbarButtonPlain