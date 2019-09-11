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
      { label: "Moving to...", value: "moving" },
      { label: "CurrentlyReading", value: "currentlyReading" },
      { label: "Want to Read", value: "wantToRead" },
      { label: "Read", value: "read" },
      { label: "None", value: "none" }
    ]
  };
  render() {
    const authors = this.props.authors;
    const title = this.props.title;
    const onChangeHandler = this.props.onChangeHandler;
    const book = this.props.book;
    const imgsrc = this.props.imageLinks.thumbnail;
    const selected = this.props.shelf;

    const makeOption = item => {
      if (item.value == "moving") {
        return (
          <option key={item.value} value={item.value} disabled>
            {item.label}
          </option>
        );
      } else {
        if (selected === item.value)
          return (
            <option key={item.value} value={item.value} selected>
              {item.label}
            </option>
          );
        else
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
      }
    };
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
            onChange={e => {
              onChangeHandler(e.target.value, book);

              this.setState({ selected: e.target.value });
            }}>
            {this.state.optionList.map(item =>
              // add selected if
              makeOption(item)
            )}
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
