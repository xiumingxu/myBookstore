import React from "react";
import { storiesOf } from "@storybook/react";

import Book from "./index";

const stories = storiesOf("lib/Book", module);

stories.add("default", () => (
  <Book
    imgsrc='https://via.placeholder.com/150x200'
    author='Harper'
    bookName='To Kill a Mockingbird'
  />
));
