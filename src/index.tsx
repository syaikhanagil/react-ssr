import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import './assets/style.scss';

const root = document.getElementById('root') as HTMLElement;

ReactDOMClient.hydrateRoot(
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
