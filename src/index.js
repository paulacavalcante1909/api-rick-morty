import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './store';
import { BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
