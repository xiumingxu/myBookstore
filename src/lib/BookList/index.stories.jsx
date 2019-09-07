import React from "react";
import { storiesOf } from "@storybook/react";

import BookList from "./index";

const stories = storiesOf("lib/BookList", module);

const optionList = [
  { label: "Reading", value: "reading" },
  { label: "Want to Read", value: "wantToRead" },
  { label: "Done", value: "done" }
];
stories.add("default", () => (
  <BookList
    bookList={[
      {
        imgsrc: "https://via.placeholder.com/150x200",
        author: "Harper",
        bookName: "To Kill a Mockingbird",
        optionList
      },
      {
        imgsrc: "https://via.placeholder.com/150x200",
        author: "B",
        bookName: "abc",
        optionList
      },
      {
        imgsrc: "https://via.placeholder.com/150x200",
        author: "ablkajdslfjasdljf asdf",
        bookName: "abclajdslf ja ad",
        optionList
      }
    ]}
  />
));
