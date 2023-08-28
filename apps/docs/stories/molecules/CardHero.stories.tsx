import type { Meta, StoryObj } from '@storybook/react';
import { CardHero } from '../../../../packages/ui/src';

const meta = {
    title: 'Molecules/CardHero',
    component: CardHero,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
  } satisfies Meta<typeof CardHero>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  
  export const Primary: Story = {
    args:{
        alt:'image',
        image:'https://www.truetrophies.com/imgs/070531/sonic-ps5.jpg',
    }
  };
  