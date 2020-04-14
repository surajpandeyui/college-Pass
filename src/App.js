import React from 'react'; 
import Header from './Header.js'; 
import Footer from './Footer.js'; 
import Content from './Content.js'; 
import Slider from './Slider'; 
import Card from './Card';

class App extends React.Component { render() { return (
  <div>
      <Header />
      <Slider />
      <Content />
      <Footer />
  </div>

  ); } } 
  
export default App;