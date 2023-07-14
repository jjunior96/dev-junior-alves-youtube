import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light'
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa'
          })
        })
      }
    }
  }
});
