import type { Meta, StoryObj } from "@storybook/react";

import { Box, CardStateOrder } from "../../../../packages/ui/src";

const meta = {
  title: "Molecules/CardStateOrder",
  component: CardStateOrder,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof CardStateOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    img: (
      <Box
        height={"4.75rem"}
        alignItems={"center"}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <img
          src={"https://m.media-amazon.com/images/I/815aKWcEkEL.jpg"}
          srcSet={`https://m.media-amazon.com/images/I/815aKWcEkEL.jpg`}
          alt={"image"}
          style={{
            height: "80%",
            width: "100%",
            objectFit: "contain",
          }}
          loading="lazy"
        />
      </Box>
    ),
    title: "Spidermaan Marvel PS4",
    price: "S/ 120.00",
  },
};
