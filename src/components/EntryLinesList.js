import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import EntryLines from "./EntryLines";

export default function EntryLinesList({ entries = [], deleteEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLines key={entry.id} {...entry} deleteEntry={deleteEntry} />
      ))}
    </Container>
  );
}

EntryLinesList.propTypes = {
  entries: PropTypes.array,
  deleteEntry: PropTypes.func,
};
