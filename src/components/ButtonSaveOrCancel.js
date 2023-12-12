import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

export default function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={addEntry}>
        OK
      </Button>
    </Button.Group>
  );
}

ButtonSaveOrCancel.propTypes = {
  addEntry: PropTypes.func,
};
