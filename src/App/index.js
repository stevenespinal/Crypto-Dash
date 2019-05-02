import React, {Component} from 'react';
import Welcome from './WelcomeMessage';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import AppProvider from './AppProvider';


class Index extends Component {
  render() {
    return (
        <AppLayout>
          <AppProvider>
            <AppBar/>
            <Welcome/>
          </AppProvider>
        </AppLayout>
    );
  }
}

export default Index;
