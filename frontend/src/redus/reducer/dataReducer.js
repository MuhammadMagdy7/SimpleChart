import { FETCH_DATA_SUCCESS, SET_FILTERS } from "../types/type";

const initiaState = {
  data: [],
  filter: {}
}


const userReducer = (state = initiaState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload }
    case SET_FILTERS :
      return { ...state, filter: action.payload }
    default:
      return state
    }
};

export default userReducer;
