import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLinesList from "./components/EntryLinesList";
import MainHeader from "./components/MainHeader";
import ModelEdit from "./components/ModelEdit";
import NewEntryForm from "./components/NewEntryForm";
import "./styles.css";

export default function App() {
  const [entries, setEntries] = useState(initialEntries);

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
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      setEntries(updatedEntries);
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
      const updatedEntries = entries.map((entry) =>
        entry.id === editingForEntry ? updatedEntry : entry,
      );
      setEntries(updatedEntries);
      handleModelClose();
      handleReset();
    }
  };

  const addEntry = ({ description, value }) => {
    const newEntry = { description, value, id: entries.length + 1 };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
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

var initialEntries = [
  { id: 1, description: "Work income", value: 10000, isExpense: false },
  { id: 2, description: "Water bill", value: 10, isExpense: true },
  { id: 3, description: "Rent", value: 300, isExpense: true },
  { id: 4, description: "Power bill", value: 50, isExpense: true },
];
