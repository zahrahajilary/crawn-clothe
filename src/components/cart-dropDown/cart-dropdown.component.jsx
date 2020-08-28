import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import {selectCartItems} from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/CartItem.component";

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item =>
                <CartItem item={item} key={item.id}/>
            )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
export default connect(mapStateToProps, null)(CartDropDown);
