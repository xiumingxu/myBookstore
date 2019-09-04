import React from "react";
import PropTypes from "prop-types";

import styles from "./Heading.module.css";

const propTypes = {
  text: PropTypes.string.isRequired
};

const Heading = ({ text }) => (
  <div className={styles.container}>
    <h1> {text} </h1>
  </div>
);

Heading.propType = propTypes;
export default Heading;
