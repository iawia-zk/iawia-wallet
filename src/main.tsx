import { StyleSheetManager } from 'styled-components';
import ReactDOM from 'react-dom/client';
import shouldForwardProp from './configs/shouldForwardProp';
import App from './App';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <App />
  </StyleSheetManager>
);
