import React from "react";
import { storiesOf } from "@storybook/react";

import Book from "./index";

const stories = storiesOf("lib/Book", module);

stories.add("default", () => (
  <Book
    optionList={[
      { label: "Reading", value: "reading" },
      { label: "Want to Read", value: "wantToRead" },
      { label: "Done", value: "read" }
    ]}
    imageLinks={{ thumbnail: "https://via.placeholder.com/150x200" }}
    authors={["Harper"]}
    title='To Kill a Mockingbird'
    onChangeHandler={item => console.log("ítem", item)}
    book='hte'
  />
));
