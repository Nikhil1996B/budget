import { types } from "../actions";
export default (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case types.ADD_ENTRY_RESULT:
      return [...state, action.payload];
    case types.REMOVE_ENTRY_RESULT:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case types.UPDATE_ENTRY:
      newEntries = state.map((entry) =>
        entry.id === action.payload.id ? action.payload.updatedEntry : entry,
      );
      return newEntries;
    case types.POPULATE_ENTRIES:
      return action.payload;
    case types.POPULATE_ENTRY_DETAILS:
      newEntries = state.map((entry) =>
        entry.id === action.payload.id
          ? { ...entry, ...action.payload.entry }
          : entry,
      );
      return newEntries;
    default:
      return state;
  }
};

var initialEntries = [];
