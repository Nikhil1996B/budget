import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

export default function ButtonSaveOrCancel({
  handleNewEntryAdd,
  handleCancel,
}) {
  return (
    <Button.Group style={{ margin: "20 0" }}>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button.Or />
      <Button primary onClick={handleNewEntryAdd}>
        OK
      </Button>
    </Button.Group>
  );
}

ButtonSaveOrCancel.propTypes = {
  handleNewEntryAdd: PropTypes.func,
  handleCancel: PropTypes.func,
};
