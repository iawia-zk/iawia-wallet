import ThemeProvider from 'context/ThemeProvider';
import React from 'react';
import './onboarding.css';
import './assets/global.css';
import ReactDOM from 'react-dom/client';
import AlertModal from 'components/AlertModal';
import { alertModalRef } from 'components/AlertModal/AlertModal';
import './configs/i18n';
import Verification from 'screens/Verification/Verification';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Verification />
      <AlertModal ref={alertModalRef} />
    </ThemeProvider>
  </React.StrictMode>
);
