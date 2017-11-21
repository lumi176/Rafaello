import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
 
        	<section id="menu-section">
				<div class="container">
					<div class="row">


						<div class="logo col-lg-3 col-sm-3"><img src="images/logo.png" alt="Logo"/></div>

							<div class="top-nav col-lg-9 col-sm-9">
								<ul>
									<li><a href="portfolio.html">SERVICES</a></li>
									<li><a href="about.html">WORK</a></li>
									<li><a href="blog.html">ABOUT US</a></li>
									<li><a href="get in touch.html">BLOG</a></li>
									<li><a href="get in touch.html">STUDIO</a></li>
									<li><a href="get in touch.html">PRICING</a></li>
									<li><a href="get in touch.html">CONTACT</a></li>

								</ul>
							</div>

					</div>

				</div>
	    
			</section>
     
    );
  }
}

export default Menu;