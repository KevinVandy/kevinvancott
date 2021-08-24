import React from 'react';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import theme from './theme';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default App;
