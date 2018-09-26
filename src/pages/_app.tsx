import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../store/with-redux-store'
import { Provider } from "react-redux";
import {  Store } from "redux";
import { AppComponentProps, AppComponentContext } from "next/app";


type APageProps = {
  reduxStore: Store;
};

type AppProps = AppComponentProps & APageProps;

class MyApp extends App<AppProps, AppComponentContext> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp)