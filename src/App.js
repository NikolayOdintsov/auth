import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, CardSection, Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDOyeUOea68ZLAgd87xQnQ5QoBKoNceARA",
            authDomain: "authentication-3411b.firebaseapp.com",
            databaseURL: "https://authentication-3411b.firebaseio.com",
            projectId: "authentication-3411b",
            storageBucket: "authentication-3411b.appspot.com",
            messagingSenderId: "688773569674"
        });

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);

            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size='large'/>;
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }

}

export default App;
