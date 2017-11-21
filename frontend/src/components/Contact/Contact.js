import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {

	constructor(props) {
    super(props);
    this.state = {
	  name: '',
	  email:'',
	  message:''
    };

    
  }


  	//_nameChanged : function(e) {
		//var _state = this.state;
		//_state.name = e.target.value.substring(0,200);
		//this.setState(_state);
	    // },


	nameChanged=(event)=> {
		//this.setState({value: event.target.value});

		//var oldState = this.state;
		//var newState = {...oldState} // clone old state obj into variable newState
		//newState.name = event.target.value;
		//this.setState(newState) ;

		this.setState({
			...this.state,
			name:event.target.value
		})
  }
	emailChanged=(event)=> {
    	
		this.setState({
			...this.state,
			email:event.target.value
		})
  }
	messageBodyChanged=(event)=> {
    	
		this.setState({
			...this.state,
			message:event.target.value
		})
  }

  	submit(event) {
		alert('Form was submitted: ' + this.state.value);
		event.preventDefault();
  }
  render() {
	  console.log(this.state);
    return (
      	
	<section id="contact">
		<div className="container">
		
			<h3 className="title">Contact me</h3>
			<p  className="subtitle">dffdgdgdgdfg</p>
			<div className="row">
				<div className="top-nav col-lg-6 col-sm-6 col-lg-offset-3 col-sm-offset-3">
					<div className="form">
						<form onSubmit={this.submit}>
							<br/>
							<input type="text" placeholder="Name" value={this.state.name}  onChange={this.nameChanged}/>
							<br/>
							<br/>
							<input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={this.emailChanged} />
							<br/>
							<br/>
							<textarea name="message" rows="10" cols="30" placeholder="Your message..."  value={this.state.message}   onChange={this.messageBodyChanged}></textarea>
							<br/><br/>
								<div className="submitbtn">
									<button type="submit" className="btn">Submit</button>
								</div>
						</form>
					</div>
				</div>
				
				
			</div>
		</div>

	</section>
     
    );
  }
}

export default Contact;
