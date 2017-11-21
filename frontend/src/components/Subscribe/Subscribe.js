import React, { Component } from 'react';
import './Subscribe.css';

class Subscribe extends Component {
  render() {
    return (
 
        	<section id="subscribe">
		   <div className="container">
			    <div className="row">
				    <form action="/action_page.php">
						<div className="subs">
						<input type="text" name="firstname" value="Email"className="subsemail"/>
						
						<button type="button" className="btn btn-danger">Subscribe</button>
						<p className="substext">Promise, I do not spam :)</p>
						</div>
					</form>
				
				
				
			   </div>
		  </div>

	</section>
     
    );
  }
}

export default Subscribe;
