import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProviderWrapper } from './context/app.context';
import Header from './components/Header.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviderWrapper>
        <Header />
        <App />
      </AppProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
