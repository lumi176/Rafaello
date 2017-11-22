import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
  render() {
    return (
 
        	<section id="services">
		<div className="container">
			<div className="row">
				<h3 className="title">Services</h3>
				<p className="subtitle">dffdgdgdgdfg</p>
				<div className="top-nav col-lg-12 col-sm-12">
					 	<div className="top-nav col-lg-4 col-sm-4">	
							<div className="wrapper round">
								<img src="images/pencil.png"   className="centerimg" alt="Logo"/>
							</div>
						<h3>IT</h3>
						<p className="centertxt">Donec sed odio dui. Nulla vitae elit libero, a pharetra. Donec sed Donec sed odio dui. Donec sed odio dui. Nulla vitae elit libero, a pharetra. Donec sed Donec sed odio dui. Donec sed Donec sed odio dui</p>
						<button type="button" className="btn btn-danger morebtn">More</button>
					</div>
					<div className="top-nav col-lg-4 col-sm-4">
						  <div className="wrapper round">	
							<img src="images/heart.png" className="centerimg" alt="Logo"/>
							 </div>
							<h3>INTERIOR DESIGN</h3>
							<p className="centertxt">Donec sed odio dui. Nulla vitae elit libero, a pharetra. Donec sed Donec sed odio dui. Donec sed odio dui. Nulla vitae elit libero, a pharetra. Donec sed Donec sed odio dui. Donec sed Donec sed odio dui</p>
							<button type="button" className="btn btn-danger morebtn">More</button>
						 
					</div>
					<div className="top-nav col-lg-4 col-sm-4 ">
						 <div className="wrapper round">		
						 <img src="images/tablet.png" className="centerimg" alt="Logo"/>
						  </div>
						 <h3>OTHER</h3>
						 <p className="centertxt">Photograpy/Taking care of small pets for max 1 week,/fdsfsfds ffffffffffff fffffsdfd sfsdfsdfsdfs dfsdfds fsdff ffffffffff ffffffffffff ffffffff fffffff gdgdfgdgddgf ffffffff ffff</p>
						  <button type="button" className="btn btn-danger  morebtn">More</button>
						
					</div>
					 
			    </div>
			</div>
		</div>
		</section>
     
    );
  }
}

export default Services;
