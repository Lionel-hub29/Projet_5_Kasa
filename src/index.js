import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);