import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import Header from './header.js';
import Cards from './cards.js';
import Footer from './footer.js';

const App = (props) => {
  return (
    <>
    <Navbar nav1='Start Bootstrap' home='Home' ab='About' ab='About' sv='Services' ct='Contact'  />
    <div class="container">

    <Header d1='A Warm Welcome!' d2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.' d3='Call to action!'/>
    <div class="row text-center">
      <Cards c1='Card title' c2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.' c3='Find Out More!' c4="http://placehold.it/500x325"/>
      <Cards c1='Card title' c2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.' c3='Find Out More!' c4="http://placehold.it/500x325"/>
      <Cards c1='Card title' c2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.' c3='Find Out More!' c4="http://placehold.it/500x325"/>
      <Cards c1='Card title' c2='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.' c3='Find Out More!' c4="http://placehold.it/500x325"/>
    </div>
 
    </div>
    <Footer f1='Copyright' f2='Your Website 2019'/>
    </>
  )
}



export default App;

