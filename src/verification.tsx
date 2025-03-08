import ThemeProvider from 'context/ThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AlertModal from 'components/AlertModal';
import { alertModalRef } from 'components/AlertModal/AlertModal';
import Page from 'components/Page/Page';
import './configs/i18n';

const FullscreenPage: React.FC = () => (
  <Page>
    <div>
      <h1>IAWIA Connect</h1>
    </div>
  </Page>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FullscreenPage />
      <AlertModal ref={alertModalRef} />
    </ThemeProvider>
  </React.StrictMode>
);
