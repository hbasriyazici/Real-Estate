import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {roomFilterReducer, brandFilterReducer} from "./product.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    roomFilter: roomFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
