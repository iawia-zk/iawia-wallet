import './App.css';
import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ThemeProvider from 'context/ThemeProvider';
import History from 'screens/history';
import MainLayout from './layouts/MainLayout';
import Data from './screens/data/Data';
import Onboard from './screens/onboarding/Onboard/Onboard';
import ImportWallet from './screens/onboarding/ImportWallet/ImportWallet';
import CreateWallet from './screens/onboarding/CreateWallet/CreateWallet';
import './configs/i18n';

declare global {
  interface Window {
    showOpenFilePicker: (options?: {
      types?: { description: string; accept: Record<string, string[]> }[];
      multiple?: boolean;
    }) => Promise<FileSystemFileHandle[]>;
  }
}

const App: FC = () => (
  <ThemeProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Onboard />} />
        <Route path="/import-wallet" element={<ImportWallet />} />
        <Route path="/create-wallet" element={<CreateWallet />} />
        <Route element={<MainLayout />}>
          <Route path="/data" element={<Data />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

export default App;
