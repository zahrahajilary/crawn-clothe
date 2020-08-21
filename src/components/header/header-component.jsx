import React from "react";
import './header.style.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firbase.utils";

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/contact' className="option">CONTACT</Link>
            {currentUser ? <div className="option" onClick={()=>auth.signOut()}>SING OUT</div> : <Link to='/singin' className="option">SING IN</Link>}

        </div>
    </div>
)
export default Header;
