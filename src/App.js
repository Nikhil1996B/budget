import { useState } from "react";
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

  const [isOpen, setIsOpen] = useState(false);
  const handleModelClose = () => setIsOpen(false);
  const onModelOpen = () => setIsOpen(true);

  const deleteEntry = (id) => {
    if (id) {
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      setEntries(updatedEntries);
    }
  };

  const addEntry = ({ description, value }) => {
    const newEntry = { description, value, id: entries.length + 1 };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return (
    <>
      <Container>
        <MainHeader title={"Budget"} />
        {/* Total balance */}
        <DisplayBalance
          label="Your Balance:"
          value="10000.00"
          size="tiny"
          color="black"
        />
        {/* Income and outgoing balance */}
        <DisplayBalances />
        {/* Expense history */}
        <MainHeader title={"History"} type="h3" />
        <EntryLinesList entries={entries} deleteEntry={deleteEntry} />
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
            onModelOpen,
          }}
        />
      </Container>
      <ModelEdit isOpen={isOpen} handleModelClose={handleModelClose} />
    </>
  );
}

var initialEntries = [
  { id: 1, description: "Work income", value: "$10000", isExpense: false },
  { id: 2, description: "Water bill", value: "$10", isExpense: true },
  { id: 3, description: "Rent", value: "$300", isExpense: true },
  { id: 4, description: "Power bill", value: "$50", isExpense: true },
];
