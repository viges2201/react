import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
       <Router />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
