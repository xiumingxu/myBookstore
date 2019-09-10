import React from "react";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

import BackButton from "../BackButton";

const propTypes = {
  text: PropTypes.string.isRequired
};

const SearchBar = props => (
  <div className={styles.container}>
    <div className={styles.backButton}>
      <BackButton {...props}></BackButton>
    </div>
    <input
      type='text'
      name='bookCategory'
      placeholder='  Input the query'
      autoFocus></input>
  </div>
);

SearchBar.propType = propTypes;
export default SearchBar;
