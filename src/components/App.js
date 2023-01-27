// Packages Imports
import { Component } from 'react';

// Components Imports
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
