import { Statistic } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function DisplayBalance({
  label = "",
  value = "",
  size = "tiny",
  color = "black",
}) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{label}</Statistic.Label>
      <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  );
}
DisplayBalance.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string | undefined,
  color: PropTypes.string | undefined,
};
