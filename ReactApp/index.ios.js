/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducer from './src/reducer';
import remoteActionMiddleware from './src/remote_action_middleware';
import App from './src/components/App';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';

if (window.navigator && Object.keys(window.navigator).length == 0) {
    window = Object.assign(window, {navigator: {userAgent: 'ReactNative'}});
}

import io from 'socket.io-client/socket.io';
import {setState} from './src/actions';
import {VotingContainer} from './src/components/Vote';


const socket = io('http://localhost:8090', {
    transports: ['websocket']
});

socket.on('state', (state) => {
    store.dispatch(setState(state));
});

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(combineReducers({reducer, routerReducer}));


class ReactApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route name="home" path="/" component={VotingContainer}/>
                </Router>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('ReactApp', () => ReactApp);
