import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import WelcomeMessage from './WelcomeMessage'
import {AppProvider} from './AppProvider'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
        <AppBar/>
          <WelcomeMessage name="CryptoDash"/>
        </AppProvider>
     </AppLayout>
    );
  }
}

export default App;
