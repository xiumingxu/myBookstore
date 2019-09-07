import React from "react";
import PropTypes from "prop-types";

import styles from "./Book.module.css";
import style from "react-syntax-highlighter/dist/styles/prism/hopscotch";

const propTypes = {
  author: PropTypes.array.isRequired,
  bookName: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func
};

class Book extends React.Component {
  state = {
    optionList: [
      { label: "Reading", value: "reading" },
      { label: "Want to Read", value: "wantToRead" },
      { label: "Done", value: "done" }
    ]
  };
  render() {
    // const { authors, title, imgsrc, onChangeHandler } = this.props;
    // onChangeHandler was bubbled up
    const authors = this.props.authors;
    const title = this.props.title;
    const imgsrc = this.props.imageLinks.thumbnail;
    const onChangeHandler = this.props.onChangeHandler;

    return (
      <div className={styles.container}>
        <div
          style={{
            height: 200,
            width: 140,
            backgroundImage: `url(${imgsrc})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: "cover",
            marginBottom: "30px"
          }}>
          {/* <img src={imgsrc} /> */}
        </div>
        <div className={styles.greenCircle}>
          <select
            className={styles.bookShelfChanger}
            onChange={e => onChangeHandler(e.target.value)}>
            {this.state.optionList.map(item => (
              // add selected if
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>

        <p className={styles.booktitle}>{title}</p>
        <p className={styles.author}>{authors}</p>
      </div>
    );
  }
}

Book.propType = propTypes;

export default Book;
