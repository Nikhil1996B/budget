import { Grid, Icon, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function EntryLines({
  description = "",
  value = "",
  isExpense = false,
  deleteEntry,
  id,
  onModelOpen,
}) {
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={onModelOpen} />
              <Icon name="trash" onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

EntryLines.propTypes = {
  description: PropTypes.string,
  value: PropTypes.string,
  isExpense: PropTypes.bool | undefined,
  deleteEntry: PropTypes.func,
  onModelOpen: PropTypes.func,
  id: PropTypes.number,
};
