import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import EntryLines from "./EntryLines";

export default function EntryLinesList({
  entries = [],
  deleteEntry,
  onModelOpen,
}) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLines
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          onModelOpen={onModelOpen}
        />
      ))}
    </Container>
  );
}

EntryLinesList.propTypes = {
  entries: PropTypes.array,
  deleteEntry: PropTypes.func,
  onModelOpen: PropTypes.func,
};
