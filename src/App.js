import { Container } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import "./styles.css";

export default function App() {
  return (
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
      <EntryLines description="Something" value=" $10.00" isExpense />
      <EntryLines description="Something else" value=" $10.00" />
      <EntryLines description="Something new" value=" $10.00" />
      {/* Form to add new entry */}
      <MainHeader title={"Add new transaction"} type="h3" />
      <NewEntryForm />
    </Container>
  );
}
