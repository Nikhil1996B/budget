import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

export default function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const handleNewEntryAdd = () => {
    const newEntry = {
      description,
      value,
    };
    addEntry(newEntry);
  };
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width="12"
          placeholder="New Shinny thing"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Form.Input>
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel handleNewEntryAdd={handleNewEntryAdd} />
    </Form>
  );
}

NewEntryForm.propTypes = {
  addEntry: PropTypes.func,
};
