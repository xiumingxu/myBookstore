import React from "react";

import BookList from "./lib/BookList";
import Heading from "./lib/Heading";
import SubHeading from "./lib/Subheading";

const Shelf = ({ books, onChangeHandler }) => (
  <div className='Shelf'>
    <Heading text='My Reads' />
    <SubHeading text='Currently Reading' />
    <BookList
      bookList={books.filter(book => book.shelf === "currentlyReading")}
      onChangeHandler={onChangeHandler}
    />
    <SubHeading text='Want to Read' />
    <BookList
      bookList={books.filter(book => book.shelf === "wantToRead")}
      onChangeHandler={onChangeHandler}
    />
    <SubHeading text='Read' />
    <BookList
      bookList={books.filter(book => book.shelf === "read")}
      onChangeHandler={onChangeHandler}
    />
  </div>
);

export default Shelf;
