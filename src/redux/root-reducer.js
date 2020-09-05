import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import {persistReducers} from 'redux';
import  storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart'] // pass all reducer to white list
};

const rootReducer = combineReducers({
    user: userReducer,
    cart:cartReducer
});

export default persistReducers(persistConfig, rootReducer)
