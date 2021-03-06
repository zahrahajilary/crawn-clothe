import React from "react";
import './header.style.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firbase.utils";
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropDown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className="option">SHOP</Link>
            <Link to='/contact' className="option">CONTACT</Link>
            {currentUser ? <div className="option" onClick={() => auth.signOut()}>SING OUT</div> :
                <Link to='/singin' className="option">SING IN</Link>}
            <CartIcon/>

        </div>
        {hidden ? null : <CartDropDown/>}

    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps, null)(Header);
