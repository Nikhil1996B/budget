export const addEntriesRedux = (payload) => ({ type: "ADD_ENTRY", payload });
export const removeEntriesRedux = (id) => ({
  type: "REMOVE_ENTRY",
  payload: { id },
});

export const updateEntriesRedux = (id, updatedEntry) => ({
  type: "UPDATE_ENTRY",
  payload: { id, updatedEntry },
});
