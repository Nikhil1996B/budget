import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

export default function DisplayBalances() {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance
                label="Income:"
                value="5000.50"
                size="tiny"
                color="green"
              />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance
                label="Outgoing:"
                value="4999.50"
                size="tiny"
                color="red"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}