import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index.tsx";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

export const Light: StoryObj<typeof Card> = {
  name: "Light Card",
  render: () => (
    <Card color="light" header={<h3>Header</h3>} footer={<p>Footer</p>}>
      <p>This is a sample content inside the card.</p>
    </Card>
  ),
};

export const Dark: StoryObj<typeof Card> = {
  name: "Dark Card",
  render: () => (
    <Card
      color="dark"
      header={<h3>Header in Dark</h3>}
      footer={<p>Footer in Dark</p>}
    >
      <p>This is a sample content inside the dark card.</p>
    </Card>
  ),
};
