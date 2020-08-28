import React from 'react';
import './checkoutItem.style.scss';
import {connect} from 'react-redux';
import {addNewItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.action";

const CheckoutItem = ({cartItem, removeItemFromCart,removeItem,addNewItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt='item' src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addNewItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
};
const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: item=> dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addNewItem: item => dispatch(addNewItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
