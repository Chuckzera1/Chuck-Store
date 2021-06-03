import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from 'Routes';
import history from 'services/history';
import GlobalStyles from 'styles/globalStyles';
import Header from 'Components/Header';
import './App.css';
import './config/ReactotronConfig';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
