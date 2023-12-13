import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
/* eslint react/prop-types: 0 */
export default function NewEntryForm({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
  addEntry,
}) {
  const handleCancel = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };
  const handleNewEntryAdd = () => {
    addEntry({ description, value, isExpense });
  };
  return (
    <Form unstackable>
      <EntryForm
        {...{
          description,
          setDescription,
          value,
          setValue,
          isExpense,
          setIsExpense,
          addEntry,
        }}
      />
      <ButtonSaveOrCancel
        handleNewEntryAdd={handleNewEntryAdd}
        handleCancel={handleCancel}
      />
    </Form>
  );
}
