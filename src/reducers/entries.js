export default (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, action.payload];
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case "UPDATE_ENTRY":
      newEntries = state.map((entry) =>
        entry.id === action.payload.id ? action.payload.updatedEntry : entry,
      );
      return newEntries;
    default:
      return state;
  }
};

var initialEntries = [
  { id: 1, description: "Work income", value: 10000, isExpense: false },
  { id: 2, description: "Water bill", value: 10, isExpense: true },
  { id: 3, description: "Rent", value: 300, isExpense: true },
  { id: 4, description: "Power bill", value: 50, isExpense: true },
];
