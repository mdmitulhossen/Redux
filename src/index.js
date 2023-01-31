import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '../src/Assests/CSS/bootstrap.min.css';
import '../src/Assests/CSS/style.css'
import App from './App';
import Store from './Redux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>
);

