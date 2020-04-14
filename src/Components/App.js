import React from 'react';
import Header from 'Components/Header.js';
import Footer from 'Components/Footer.js';
import Content from 'Components/Content.js';
import Slider from 'Components/Slider';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;