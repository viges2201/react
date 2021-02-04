import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import { ThemeProvider } from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './theme';
// import { BrowserRouter } from 'react-router-dom';
import Router from './components/router'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import initStore, { history } from './utils/store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = initStore();

ReactDOM.render(
   <Provider store={ store }>
       <PersistGate loading={ null } persistor={ persistor }>
           <ConnectedRouter history={history}>
               <MuiThemeProvider theme={theme}>
                   <Router />
               </MuiThemeProvider>
           </ConnectedRouter>
       </PersistGate>
   </Provider>,
   document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
