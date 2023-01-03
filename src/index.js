import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import GlobalStyle from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        {/* <BrowserRouter basename={'/goit-react-hw-08-phonebook/'}> */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
