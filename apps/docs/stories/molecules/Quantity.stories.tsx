import type { Meta, StoryObj } from '@storybook/react';

import { Quantity } from '../../../../packages/ui/src';

const meta = {
  title: 'Molecules/Quantity',
  component: Quantity,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Quantity>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    quantity:10,
    changeQuantity:()=>{},
    onDelete:()=>{}
  }
};
