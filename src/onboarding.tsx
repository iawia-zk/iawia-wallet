import ThemeProvider from 'context/ThemeProvider';
import './onboarding.css';
import './assets/global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ImportWallet from 'screens/onboarding/ImportWallet';
import AlertModal from 'components/AlertModal';
import { alertModalRef } from 'components/AlertModal/AlertModal';
import './configs/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ImportWallet />
      <AlertModal ref={alertModalRef} />
    </ThemeProvider>
  </React.StrictMode>
);
