import { Container, Segment, Grid, Icon } from "semantic-ui-react";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <MainHeader title={"Budget"} />
      {/* Total balance */}
      <DisplayBalance
        label="Your Balance:"
        value="10000.00"
        size="tiny"
        color="black"
      />

      {/* Income and outgoing balance */}
      <DisplayBalances />

      <MainHeader title={"History"} type="h3" />
      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something new
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* Form */}
      <MainHeader title={"Add new transaction"} type="h3" />
      <NewEntryForm />
    </Container>
  );
}
