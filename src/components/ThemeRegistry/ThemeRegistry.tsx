'use client';

import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { EmotionCacheProvider } from './Emotion';
import { theme } from './theme';

function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}

export { ThemeRegistry };
