import React from "react";
import PropTypes from "prop-types";

import styles from "./Book.module.css";

const propTypes = {
  author: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired
};

// const Book = ({ text }) => (
//   <div className={styles.container}>
//     <h1> {text} </h1>
//   </div>
// );

class Book extends React.Component {
  render() {
    const { author, bookName, imgsrc } = this.props;

    return (
      <div className={styles.container}>
        <img src={imgsrc}></img>

        <select className={styles.bookShelfChanger}>
          <option value='READING'>READING</option>
          <option value='READING'>READING</option>
          <option value='READING'>READING</option>
          <option value='READING'>READING</option>
        </select>

        <p className={styles.booktitle}>{bookName}</p>
        <p className={styles.author}>{author}</p>
      </div>
    );
  }
}

Book.propType = propTypes;

export default Book;
