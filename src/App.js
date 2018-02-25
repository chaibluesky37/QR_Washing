console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';

import Routes from '../src/component/Routes';
import Firebase from 'firebase';
//import Config from 'react-native-config';

export default class App extends Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: "xxx",
            authDomain: "xxx",
            databaseURL: "xxx",
             projectId: "xxx",
            storageBucket: "xxx",
            messagingSenderId: "xxx"
        })
    }
    render() {
        return (
            <Routes/>
        );
    }
}

