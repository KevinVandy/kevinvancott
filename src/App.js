import React from 'react';
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import theme from "./theme";
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  );
};


export default App;
