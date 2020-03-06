import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {roomFilterReducer, locationFilterReducer, brandFilterReducer} from "./product.filter.reducer";
import {orderByPriceReducer} from "./orderByPrice.filter.reducer";
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    brandFilter: brandFilterReducer,
    roomFilter: roomFilterReducer,
    locationFilter: locationFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer
});
