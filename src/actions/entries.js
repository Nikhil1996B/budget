import types from "./types";

export const addEntriesRedux = (payload) => ({ type: "ADD_ENTRY", payload });
export const removeEntriesRedux = (id) => ({
  type: types.REMOVE_ENTRY,
  payload: { id },
});

export const updateEntriesRedux = (id, updatedEntry) => ({
  type: types.UPDATE_ENTRY,
  payload: { id, updatedEntry },
});

export const getAllEntriesRedux = () => ({
  type: types.GET_ENTRIES,
});

export const populateEntries = (entries = []) => ({
  type: types.POPULATE_ENTRIES,
  payload: entries,
});
