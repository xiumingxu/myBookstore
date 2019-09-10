import React from "react";
import { storiesOf } from "@storybook/react";

import BookList from "./index";

const stories = storiesOf("lib/BookList", module);

// const optionList = [
//   { label: "Reading", value: "reading" },
//   { label: "Want to Read", value: "wantToRead" },
//   { label: "Done", value: "done" }
// ];

stories.add("default", () => (
  <BookList
    bookList={[
      {
        imageLinks: { thumbnail: "https://via.placeholder.com/150x200" },
        authors: ["Harper"],
        title: "To Kill a Mockingbird"
      },
      {
        imageLinks: { thumbnail: "https://via.placeholder.com/150x200" },
        author: ["B"],
        title: "abc"
      },
      {
        imageLinks: { thumbnail: "https://via.placeholder.com/150x200" },
        authors: ["ablkajdslfjasdljf asdf"],
        title: "abclajdslf ja ad"
      }
    ]}
  />
));
