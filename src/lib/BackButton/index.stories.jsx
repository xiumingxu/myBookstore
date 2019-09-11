import React from "react";
import { storiesOf } from "@storybook/react";

import BackButton from "./index";

const stories = storiesOf("lib/BackButton", module);

stories.add("default", () => (
  <BackButton
    goback={() => {
      console.log("goback");
    }}
  />
));
