export const addEntriesRedux = (payload) => ({ type: "ADD_ENTRY", payload });
export const removeEntriesRedux = (id) => ({
  type: "ADD_ENTRY",
  payload: { id },
});
