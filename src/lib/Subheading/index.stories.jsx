import React from "react";
import { storiesOf } from "@storybook/react";

import Subheading from "./index";

const stories = storiesOf("lib/Subheading", module);

stories.add("default", () => <Subheading text='Currently Reading' />);
