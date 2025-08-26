import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { SyncThemeProvider } from '../src/style/SyncTheme';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      return React.createElement(
        SyncThemeProvider,
        { theme: theme, children: React.createElement(Story) }
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;