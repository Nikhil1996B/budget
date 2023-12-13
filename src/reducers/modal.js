export default function (state = { isOpen: false }, action) {
  console.log(action);
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    default:
      return { ...state, isOpen: false };
  }
}
