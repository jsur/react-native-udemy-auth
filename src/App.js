import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
  }

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
