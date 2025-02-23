import './App.css';
import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ThemeProvider from 'context/ThemeProvider';
import MainLayout from './layouts/MainLayout';
import Home from './screens/home/Home';
import Data from './screens/data/Data';
import Settings from './screens/settings/Settings';
import Onboard from './screens/onboarding/Onboard/Onboard';
import ImportWallet from './screens/onboarding/ImportWallet/ImportWallet';
import CreateWallet from './screens/onboarding/CreateWallet/CreateWallet';

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
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

export default App;
