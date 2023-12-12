import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

export default function NewEntryForm({
  addEntry,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
  onModelOpen,
}) {
  const handleCancel = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const handleNewEntryAdd = () => {
    const newEntry = {
      description,
      value,
      isExpense,
    };
    addEntry(newEntry);
    handleCancel();
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
          onModelOpen,
        }}
      />
      <ButtonSaveOrCancel
        handleNewEntryAdd={handleNewEntryAdd}
        handleCancel={handleCancel}
      />
    </Form>
  );
}

NewEntryForm.propTypes = {
  description: PropTypes.string,
  setDescription: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  isExpense: PropTypes.bool,
  setIsExpense: PropTypes.func,
  onModelOpen: PropTypes.func,
  addEntry: PropTypes.func,
};
