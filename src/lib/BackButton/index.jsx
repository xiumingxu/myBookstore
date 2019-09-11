import React from "react";
import PropTypes from "prop-types";
import { Router, Link } from "react-router-dom";

import styles from "./BackButton.module.css";

const propTypes = {};

const BackButton = props => (
  <div className={styles.container} onClick={props.goback}>
    {/* <Router>
      <Link to='/'></Link>
    </Router> */}
    {/* <button onClick={props.goback}>test</button> */}
  </div>
);

BackButton.propType = propTypes;
export default BackButton;
