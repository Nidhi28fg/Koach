import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './Users';
import './styles.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users/:userId" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
