import { 
  ADD_ROOM_TO_FILTER, 
  REMOVE_ROOM_FROM_FILTER,
  ADD_LOCATION_TO_FILTER,
  REMOVE_LOCATION_FROM_FILTER 
} from "../actions/actions";

export const roomFilterReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_ROOM_TO_FILTER:
      return (state.includes(action.rooms)) ? state : state += action.rooms
      
    case REMOVE_ROOM_FROM_FILTER:
      console.log('remove rooms', action);
      const reg = new RegExp(action.rooms, 'gi');
      return state.replace(reg, '');
    default:
      return state;
  }
};



export const locationFilterReducer = (state = '', action) => {
  switch (action.type) {
  case ADD_LOCATION_TO_FILTER:
    return (state.includes(action.location)) ? state : state += action.location

  case REMOVE_LOCATION_FROM_FILTER:
    console.log('removed location', action);
    const reg = new RegExp(action.location, 'gi');
    return state.replace(reg, '');
  default:
    return state;
  }
};

