import React from "react";
import { Header } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function MainHeader({ title, type = "h1" }) {
  return <Header as={type}>{title}</Header>;
}

MainHeader.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string | undefined,
};
