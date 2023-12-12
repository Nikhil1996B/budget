import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";
import PropTypes from "prop-types";

export default function DisplayBalances({ totalIncome, totalExpense }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              label="Income:"
              value={totalIncome}
              size="tiny"
              color="green"
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              label="Outgoing:"
              value={totalExpense}
              size="tiny"
              color="red"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

DisplayBalances.propTypes = {
  totalIncome: PropTypes.string,
  totalExpense: PropTypes.string,
};
