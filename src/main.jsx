import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '../src/assets/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="space-tourism-web">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
