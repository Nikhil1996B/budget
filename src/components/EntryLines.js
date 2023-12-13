import { Grid, Icon, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
/* eslint react/prop-types: 0 */
export default function EntryLines({
  handleEditMode,
  isExpense,
  description,
  value,
  id,
  deleteEntry,
  onModelOpen,
}) {
  const handleModalOpen = () => {
    onModelOpen();
    handleEditMode(id);
  };

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
              <Icon name="edit" bordered onClick={handleModalOpen} />
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
  value: PropTypes.number,
  isExpense: PropTypes.bool | undefined,
  deleteEntry: PropTypes.func,
  onModelOpen: PropTypes.func,
  handleEditMode: PropTypes.func,
  id: PropTypes.number,
};
