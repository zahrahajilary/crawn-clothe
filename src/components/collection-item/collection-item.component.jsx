import React from 'react';
import './collection-item.style.scss';
import {connect} from 'react-redux';
import {addNewItem} from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({item, addNewItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image"
                 style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={()=>addNewItem(item)}>Add To Cart</CustomButton>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    addNewItem: (item) => dispatch(addNewItem(item))
});


export default connect(null, mapDispatchToProps)(CollectionItem);
