import { Checkbox, Form, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function EntryForm({
  description,
  value,
  setValue,
  setDescription,
  isExpense,
  setIsExpense,
}) {
  return (
    <>
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
      <Segment compact>
        <Checkbox
          label="is Expense?"
          toggle
          checked={isExpense}
          onChange={() => setIsExpense((prev) => !prev)}
        />
      </Segment>
    </>
  );
}

EntryForm.propTypes = {
  description: PropTypes.string,
  setDescription: PropTypes.func,
  value: PropTypes.number,
  setValue: PropTypes.func,
  isExpense: PropTypes.bool,
  setIsExpense: PropTypes.func,
};
