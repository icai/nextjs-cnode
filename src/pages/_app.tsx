import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../store/with-redux-store'
import { Provider } from 'react-redux'
import Router, { withRouter } from "next/router";


class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withReduxStore(MyApp)