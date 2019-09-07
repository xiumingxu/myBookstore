import React from "react";
import { storiesOf } from "@storybook/react";

import Book from "./index";

const stories = storiesOf("lib/Book", module);

stories.add("default", () => (
  <Book
    optionList={[
      { label: "Reading", value: "reading" },
      { label: "Want to Read", value: "wantToRead" },
      { label: "Done", value: "done" }
    ]}
    imgsrc='https://via.placeholder.com/150x200'
    author='Harper'
    bookName='To Kill a Mockingbird'
    onChangeHandler={item => console.log("ítem", item)}
  />
));
