import type { Meta, StoryObj } from '@storybook/react';

import { DropDown } from '../../../../packages/ui/src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Select',
  component: DropDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args:{
    items: [
      { label: 'Juegos Playstation 5', value: 1 },
      { label: 'Juegos Playstation 4', value: 2 },
      { label: 'Juegos Xbox', value: 3 },
      { label: 'Juegos Nintendo', value: 4 }
    ]
  }
};


