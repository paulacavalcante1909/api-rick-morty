import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Character from './pages/character/Character';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Store } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/character/:id' element={<Character />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
