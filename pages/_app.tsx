import React from 'react';
import { createStore } from 'redux';
import rootReducer from '../store/reducers/index';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/styles.css';

// https://medium.com/@waelkdouh/how-to-detect-unsupported-browsers-under-a-blazor-webassembly-application-bc11ab0ee015

const MyApp = ({ Component, pageProps }: AppProps): unknown => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
