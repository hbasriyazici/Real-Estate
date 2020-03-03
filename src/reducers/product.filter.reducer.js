import { 
  ADD_ROOM_TO_FILTER, 
  REMOVE_ROOM_FROM_FILTER, 
  ADD_BRAND_TO_FILTER, 
  REMOVE_BRAND_FROM_FILTER 
} from "../actions/actions";

export const roomFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_ROOM_TO_FILTER:
            console.log('added rooms', action);
            if(state.includes(action.rooms)) return state;
            return state += action.rooms;
        case REMOVE_ROOM_FROM_FILTER:
            console.log('remove rooms', action);
            const reg = new RegExp(action.rooms, 'gi');
            return state.replace(reg, '');
        default:
            return state;
    }
};

export const brandFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_BRAND_TO_FILTER:
            if(state.includes(action.brand)) return state;
            return state += action.brand;
        case REMOVE_BRAND_FROM_FILTER:
            console.log('remove brand', action);
            const reg = new RegExp(action.brand, 'gi');
            return state.replace(reg, '');
        default:
            return state;
    }
};

