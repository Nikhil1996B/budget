import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import EntryLines from "./EntryLines";

export default function EntryLinesList({
  entries = [],
  deleteEntry,
  onModelOpen,
  handleEditMode,
}) {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLines
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          onModelOpen={onModelOpen}
          handleEditMode={handleEditMode}
        />
      ))}
    </Container>
  );
}

EntryLinesList.propTypes = {
  entries: PropTypes.array,
  deleteEntry: PropTypes.func,
  onModelOpen: PropTypes.func,
  handleEditMode: PropTypes.func,
};
