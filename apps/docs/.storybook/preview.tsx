import React from 'react'
import type { Preview } from "@storybook/react";
import { WithTheme } from '../../../packages/ui/src/themeHelpers'

const preview: Preview = {
  decorators:[(Story)=><WithTheme><Story /></WithTheme>],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
