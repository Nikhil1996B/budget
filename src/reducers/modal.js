import { types } from "../actions";
export default function (state = { isOpen: false }, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, isOpen: true };
    case types.CLOSE_MODAL:
      return { ...state, isOpen: false };
    default:
      return { ...state, isOpen: false };
  }
}
