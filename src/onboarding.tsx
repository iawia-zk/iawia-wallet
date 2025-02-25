import ThemeProvider from 'context/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ImportWallet from 'screens/onboarding/ImportWallet';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ImportWallet />
    </ThemeProvider>
  </React.StrictMode>
);
