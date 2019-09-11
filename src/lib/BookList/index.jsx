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
  // bookList: PropTypes.array.isRequired
};

const BookList = ({ bookList, onChangeHandler }) => (
  <div className={styles.container}>
    {bookList.length !== 0 &&
      bookList.map(book => {
        // console.log("...item", { ...item });
        return (
          <div className='bookContainer' key={book.id}>
            <Book
              key={book.id}
              {...book}
              onChangeHandler={onChangeHandler}
              book={book}
            />
          </div>
        );
      })}
  </div>
);

BookList.propType = propTypes;

export default BookList;
