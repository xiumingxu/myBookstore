import React from "react";
import PropTypes from "prop-types";

import styles from "./CornerButton.module.css";
import style from "react-syntax-highlighter/dist/styles/prism/hopscotch";

const propTypes = {};

const CornerButton = props => (
  <div className={styles.circle} onClick={props.changePage}></div>
);

CornerButton.propType = propTypes;

export default CornerButton;
