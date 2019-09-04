import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "./index";

const stories = storiesOf("lib/Heading", module);

stories.add("default", () => <Heading text='MyReads' />);
