import React, {Component} from 'react';
import Welcome from './WelcomeMessage';
// import styled, {css} from 'styled-components'
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

// const MyButton = styled.button`
// color: green;
// ${props => props.primary && css`
// color: palevioletred;
// `}
// `;
// const TomatoButton = styled(MyButton)`
// color: tomato;
// border-color: tomato;
// `;

class Index extends Component {
  render() {
    return (
        <AppLayout>
          <AppBar/>
          <Welcome/>
        </AppLayout>
    );
  }
}

export default Index;
