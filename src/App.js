import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLinesList from "./components/EntryLinesList";
import MainHeader from "./components/MainHeader";
import ModelEdit from "./components/ModelEdit";
import NewEntryForm from "./components/NewEntryForm";
import "./styles.css";
import useEntryDetails from "./hooks/useEntryDetails";
import { getAllEntriesRedux } from "./actions/entries";

export default function App() {
  const {
    isOpen,
    editEntry,
    handleEditMode,
    deleteEntry,
    totalIncome,
    setTotalIncome,
    totalExpense,
    setTotalExpense,
    entries,
    handleModelClose,
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    onModelOpen,
  } = useEntryDetails();
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(getAllEntriesRedux());
  }, []);
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
          {...{
            setDescription,
            value,
            setValue,
            isExpense,
            setIsExpense,
            addEntry,
            description,
          }}
        />
      </Container>
      <ModelEdit
        isOpen={isOpen}
        handleEntryEdit={editEntry}
        handleModelClose={handleModelClose}
        {...{
          setDescription,
          value,
          setValue,
          isExpense,
          setIsExpense,
          addEntry,
          description,
        }}
      />
    </>
  );
}
