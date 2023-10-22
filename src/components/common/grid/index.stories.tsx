// stories for Grid
import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./index.tsx";

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;

const mockData = [
  {
    key: "1",
    minWidth: 100,
    render: <div style={{ height: 100, backgroundColor: "red" }} />,
  },
  {
    key: "2",
    minWidth: 100,
    render: <div style={{ height: 100, backgroundColor: "blue" }} />,
  },
  {
    key: "3",
    minWidth: 100,
    render: <div style={{ height: 100, backgroundColor: "green" }} />,
  },
  {
    key: "4",
    minWidth: 100,
    render: <div style={{ height: 100, backgroundColor: "yellow" }} />,
  },
  {
    key: "5",
    minWidth: 100,
    render: <div style={{ height: 100, backgroundColor: "purple" }} />,
  },
  {
    key: "6",
    minWidth: 100,
    render: <div style={{ height: 100, backgroundColor: "orange" }} />,
  },
];

export const Default: StoryObj<typeof Grid> = {
  name: "Default Grid",
  render: () => (
    <Grid
      data={mockData}
      columns={3}
      gap="10px"
      align="center"
      justify="center"
    />
  ),
};
