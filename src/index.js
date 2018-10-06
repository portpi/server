import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, red, pink } from '@material-ui/core/colors';
import 'typeface-roboto';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    accent: red,
    secondary: pink
  }
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
