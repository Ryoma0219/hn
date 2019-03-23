import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from './modules/ThemeProvider';
import AppRoutes from './pages/AppRoutes';

import './App.css';
// import "react-datetime/css/react-datetime.css";


const App = props => (
  <Router>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </Router>
);


export default App;
