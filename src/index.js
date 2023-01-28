import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/theme';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/*  */}
      {/* для гита */}
      <BrowserRouter basename="/petly-team-project/">
        {/*  */}
        {/* <BrowserRouter> */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
