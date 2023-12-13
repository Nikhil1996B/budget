import types from "./types";

export const openModalRedux = () => ({
  type: types.OPEN_MODAL,
});
export const closeModalRedux = () => ({
  type: types.CLOSE_MODAL,
});
