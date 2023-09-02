import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "./index.tsx";

const meta: Meta<typeof Chip> = {
  component: Chip,
};

export default meta;

export const Primary: StoryObj<typeof Chip> = {
  name: "I am the primary",
  render: () => <Chip label="chipppppp" color="primary" />,
};
