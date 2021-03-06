import React, { Component } from 'react';
import Navigation from "./Navigation";
import Intro from './Intro';
import Feature from './Feature';
import Enterprise from './Enterprise';
import Certificate from './Certificate';
import Footer from './Footer';
import Footnote from './Footnote';
import { injectGlobal } from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Intro />
        <Feature />
        <Enterprise />
        <Certificate />
        <Footer />
        <Footnote />
      </div>
    );
  }
}

injectGlobal`
  body {
    background-color: #fff;
    padding: 0;
    margin: 0;
    font-family: 'Proxima Nova';
    margin: 0 auto;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default App;
