import React, { Component } from 'react';
//import logo from '../logo.svg';
import './Home.css';
import Intro from '../components/Intro/Intro';
import Menu from '../components/Menu/Menu';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import About from '../components/About/About';
//import Experience from '../components/Experience/Experience';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Map from '../components/Map/Map';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';


class Home extends Component {
  render() {
    return (
      <div className="Home">
     		 <Intro />
			 <Menu />
			  <Services />
			   <Portfolio />
			    <About />
			
				  <Blog />
				   <Contact />
				    <Map />
					 <Subscribe />
					  <Footer />
      </div>
	  
	);
	
  }
}

export default Home;
