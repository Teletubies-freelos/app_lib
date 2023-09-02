import type { Meta, StoryObj } from '@storybook/react';

import { CardProduct  } from '../../../../packages/ui/src';

const meta = {
  title: 'Molecules/CardProduct',
  component: CardProduct,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof CardProduct>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args:{
    alt: 'Spiderman',
    description: 'Juego de Spiderman',
    price: 188,
    src: 'https://m.media-amazon.com/images/I/815aKWcEkEL.jpg',
    title: 'Spiderman',
    previousPrice: 189
  }
};
