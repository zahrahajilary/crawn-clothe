import React from 'react';
import './checkout.style.scss';
import {connect} from 'react-redux';
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

const Checkout = ({cartItems,cartTotal}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=><CheckoutItem cartItem={cartItem} key={cartItem.id}/>)
        }
        <div className="total">
            <span> TOTAL : ${cartTotal}</span>
        </div>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    cartTotal:selectCartTotal
});
export default connect(mapStateToProps)(Checkout);
