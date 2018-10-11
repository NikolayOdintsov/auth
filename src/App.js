import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDOyeUOea68ZLAgd87xQnQ5QoBKoNceARA',
            authDomain: 'authentication-3411b.firebaseapp.com',
            databaseURL: 'https://authentication-3411b.firebaseio.com',
            projectId: 'authentication-3411b',
            storageBucket: 'authentication-3411b.appspot.com',
            messagingSenderId: '688773569674'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }

}

export default App;
