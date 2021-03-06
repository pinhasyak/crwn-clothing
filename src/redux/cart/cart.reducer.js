import {CartActionsTypes} from './cart.types';

const INNITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;