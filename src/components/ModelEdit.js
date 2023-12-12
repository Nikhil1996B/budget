import { Button, Form, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";
import EntryForm from "./EntryForm";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

export default function ModelEdit({
  isOpen,
  handleModelClose,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
  handleCancel,
  handleEntryEdit,
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
  isOpen: PropTypes.bool,
  handleModelClose: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
  handleEntryEdit: PropTypes.func,
  isExpense: PropTypes.bool,
  setIsExpense: PropTypes.func,
  handleCancel: PropTypes.func,
};
