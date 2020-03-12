import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {roomFilterReducer, locationFilterReducer} from "./product.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    roomFilter: roomFilterReducer,
    locationFilter: locationFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
