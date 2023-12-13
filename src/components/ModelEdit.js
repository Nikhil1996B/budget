import { Button, Form, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";
import EntryForm from "./EntryForm";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
/* eslint react/prop-types: 0 */
export default function ModelEdit({
  isOpen,
  handleModelClose,
  handleEntryEdit,
  handleCancel,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
  addEntry,
}) {
  return (
    <Modal open={isOpen} onClose={handleModelClose}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
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
            handleNewEntryAdd={handleEntryEdit}
            handleCancel={handleCancel}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleModelClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

ModelEdit.propTypes = {
  handleEntryEdit: PropTypes.func,
  handleCancel: PropTypes.func,
};
