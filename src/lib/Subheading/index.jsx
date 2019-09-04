import React from "react";
import PropTypes from "prop-types";

import styles from "./Subheading.module.css";

const propTypes = {
  text: PropTypes.string.isRequired
};

// class SubHeading extends React {}
const Subheading = ({ text }) => (
  <div className={styles.container}>
    <h2>{text}</h2>
  </div>
);

Subheading.propTypes = propTypes;

export default Subheading;
