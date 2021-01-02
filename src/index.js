import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import AppContainer from './components/appContainer';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
