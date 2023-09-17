import Button from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    variant: 'filled',
    size: 'medium',
    children: 'Button',
    disabled: false,
  },
};
