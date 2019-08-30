import React from 'react';
import Button from '@material-ui/core/Button';
import style from './style';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard';
import theme from './../../commons/theme';

class App extends React.Component{
  render(){
    const {classes} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard/>
      </ThemeProvider>
    )
  }
}

export default withStyles(style)(App);
