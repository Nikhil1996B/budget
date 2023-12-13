import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import { v4 as uuidv4 } from "uuid";

export default function useEntryDetails() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);
  const isOpen = useSelector((state) => state.modal.isOpen);

  // modal entries
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [editingForEntry, setEditingForEntry] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const onModelOpen = () => dispatch(actions.openModalRedux());
  const handleModelClose = () => dispatch(actions.closeModalRedux());
  const deleteEntry = (id) => {
    if (id) {
      const findEntryIdToBeRemoved = entries.find(
        (entry) => entry.id === id,
      ).id;
      dispatch(actions.removeEntriesRedux(findEntryIdToBeRemoved));
    }
  };

  const handleReset = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const handleEditMode = (id) => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpensive);
      setEditingForEntry(id);
    }
  };

  const editEntry = () => {
    if (editingForEntry) {
      const updatedEntry = {
        description,
        value,
        isExpense,
        id: editingForEntry,
      };
      dispatch(actions.updateEntriesRedux(editingForEntry, updatedEntry));
      handleModelClose();
      handleReset();
    }
  };

  const addEntry = ({ description, value, isExpense }) => {
    const newEntry = { description, value, isExpense, id: uuidv4() };
    dispatch(actions.addEntriesRedux(newEntry));
    handleReset();
  };

  return {
    isOpen,
    addEntry,
    editEntry,
    handleEditMode,
    deleteEntry,
    onModelOpen,
    totalIncome,
    setTotalIncome,
    totalExpense,
    setTotalExpense,
    entries,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    handleModelClose,
  };
}
