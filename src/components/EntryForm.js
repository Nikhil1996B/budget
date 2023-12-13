import { Checkbox, Form, Segment } from "semantic-ui-react";
/* eslint react/prop-types: 0 */

export default function EntryForm({
  description,
  setDescription,
  value,
  setValue,
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
