import { Button, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";
import NewEntryForm from "./NewEntryForm";

export default function ModelEdit({ isOpen, handleModelClose }) {
  return (
    <Modal open={isOpen} onClose={handleModelClose}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <NewEntryForm />
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
};
