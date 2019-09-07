import React from "react";
import PropTypes from "prop-types";

/* eslint-disable */
import Book from "../Book/";
import styles from "./BookList.module.css";

const propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

const BookList = ({ bookList }) => (
  <div className={styles.container}>
    {bookList.map(item => (
      <Book {...item} />
    ))}
  </div>
);

BookList.propType = propTypes;

export default BookList;
