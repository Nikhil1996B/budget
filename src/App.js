import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLinesList from "./components/EntryLinesList";
import MainHeader from "./components/MainHeader";
import ModelEdit from "./components/ModelEdit";
import NewEntryForm from "./components/NewEntryForm";
import "./styles.css";
import * as actions from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const { entries } = useSelector((state) => state);

  // modal entries
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [editingForEntry, setEditingForEntry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const handleModelClose = () => setIsOpen(false);
  const onModelOpen = () => setIsOpen(true);

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
      // const updatedEntries = entries.map((entry) =>
      //   entry.id === editingForEntry ? updatedEntry : entry,
      // );
      // setEntries(updatedEntries);
      dispatch(actions.updateEntriesRedux(editingForEntry, updatedEntry));
      handleModelClose();
      handleReset();
    }
  };

  const addEntry = ({ description, value }) => {
    const newEntry = { description, value, id: entries.length + 1 };
    dispatch(actions.addEntriesRedux(newEntry));
    // setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotalIncome(totalIncome);
    setTotalExpense(totalExpense);
  }, [entries]);

  return (
    <>
      <Container>
        <MainHeader title={"Budget"} />
        {/* Total balance */}
        <DisplayBalance
          label="Your Balance:"
          value={`$ ${totalIncome - totalExpense}`}
          size="tiny"
          color="black"
        />
        {/* Income and outgoing balance */}
        <DisplayBalances
          totalIncome={`$ ${totalIncome}`}
          totalExpense={`$ ${totalExpense}`}
        />
        {/* Expense history */}
        <MainHeader title={"History"} type="h3" />
        <EntryLinesList
          entries={entries}
          deleteEntry={deleteEntry}
          onModelOpen={onModelOpen}
          handleEditMode={handleEditMode}
        />
        {/* Form to add new entry */}
        <MainHeader title={"Add new transaction"} type="h3" />
        <NewEntryForm
          addEntry={addEntry}
          {...{
            description,
            setDescription,
            value,
            setValue,
            isExpense,
            setIsExpense,
          }}
        />
      </Container>
      <ModelEdit
        isOpen={isOpen}
        {...{
          description,
          setDescription,
          value,
          setValue,
          isExpense,
          setIsExpense,
        }}
        handleEntryEdit={editEntry}
        handleModelClose={handleModelClose}
      />
    </>
  );
}
