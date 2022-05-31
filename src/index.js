import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './context/auth.context';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import FontStyles from './styles/fontStyles';

const theme = {
  colors: {
    mainOrange: '#EBB220',
    black: '#000000',
    white: '#FFFFFF',
    textBlack: '#282828',
    darkGrey: '#48494B',
    lightGrey: '#C8C8C9',
    readMoreGrey: '#949494',
    jan: '#017BBB',
    feb: '#0199D3',
    mar: '#009E4F',
    apr: '#74AE36',
    may: '#ACC91B',
    jun: '#EBAA12',
    jul: '#E7880B',
    aug: '#E93510',
    sep: '#E02B51',
    oct: '#B6347A',
    nov: '#6D4097',
    dec: '#45409A',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyle />
      <Router>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
