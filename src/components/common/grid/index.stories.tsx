// stories for Grid
import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./index.tsx";

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;

export const Default: StoryObj<typeof Grid> = {
  name: "Default Grid",
  render: () => <Grid />,
};
