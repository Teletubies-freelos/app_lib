import type { Meta, StoryObj } from "@storybook/react";

import { Button, NavBar, SearchBar } from "../../../../packages/ui/src";

const meta = {
  title: "Molecules/NavBar",
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    searchBar: (
      <SearchBar
        direction="row"
        onSubmit={() => 2}
        buttonSearch={<Button label="buscar" variant="contained" />}
      />
    ),
  },
};
