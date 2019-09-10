import React from "react";
import { storiesOf } from "@storybook/react";

import CornerButton from "./index";

const stories = storiesOf("lib/CornerButton", module);

stories.add("default", () => (
  <CornerButton changePage={() => console.log("changePage")} />
));
