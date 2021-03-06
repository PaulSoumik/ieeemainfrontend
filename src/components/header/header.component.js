import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "./header.css"

export default class Header extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
	    	color: 'transparent'
	    };
	  }

	  listenScrollEvent = e => {
	    if (window.scrollY > 100) {
	      this.setState({color: 'rgb(64, 144, 240)'})
	    } else {
	      this.setState({color: 'transparent'})
	    }
	  }

	  componentDidMount() {
	     window.addEventListener('scroll', this.listenScrollEvent);
	  }


	  render() {

	  	 return(


	  	 	<div>
	  	 	<Route>
			  	 <nav className="navbar navbar-expand" style={{backgroundColor: this.state.color}}>
			          <a href="#" className="navbar-brand">
			            IEEESBNITD
			          </a>
			          
			          <div className= "navbar-nav">
			            <li className= "nav-item"><></>
			              <Link to={"/"} className="nav-link">
			                Home
			              </Link>
			            </li>
			            <li className="nav-item">
			              <Link to={"#"} className="nav-link">
			                About Us
			              </Link>
			            </li>
			            <li className="nav-item">
			              <Link to={"/members"} className="nav-link">
			                Team
			              </Link>
			            </li>
			            <li className="nav-item">
			              <Link to={"#"} className="nav-link">
			                Alumni
			              </Link>
			            </li>
			            <li className="nav-item">
			              <Link to={"/events"} className="nav-link">
			                Activities
			              </Link>
			            </li>
			            <li className="nav-item">
			              <Link to={"#"} className="nav-link">
			                Contact Us
			              </Link>
			            </li>
			          </div>
			        </nav>
		       </Route>

	        </div>
	  	 		
	  	)
	  }
}

