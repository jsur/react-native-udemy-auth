import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAn5PAgAjMMdxuuMsExHKYP5NriVbTESBU',
      authDomain: 'auth-43d14.firebaseapp.com',
      databaseURL: 'https://auth-43d14.firebaseio.com',
      projectId: 'auth-43d14',
      storageBucket: 'auth-43d14.appspot.com',
      messagingSenderId: '429816290734'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
