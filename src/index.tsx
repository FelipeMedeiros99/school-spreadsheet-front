import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "./components/ui/provider";



import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

