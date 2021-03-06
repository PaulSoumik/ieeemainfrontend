import React, { Component } from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
import "../common.css"
import Batch2019 from "../../data/batch2019"
import theimg from "../../media/batch2019/Prateekee.jpg"

export default class Alumni extends Component {
	  constructor(props) {
	    super(props);
	    this.func = this.func.bind(this);
	    this.state = {
	    	
	    };
	  }


	  componentDidMount() {
	  	console.log(Batch2019);
	  	this.func();
	  }
	  func(){
	  	console.log(theimg);
	  	var imgUrl = "../../media/batch2019/Prateekee.jpg";
	  	const img = require("../../media/batch2019/Prateekee.jpg");
	  	console.log(img.default);
	  }


	  render() {
	  	
	  	const img = require("../../media/batch2019/Prateekee.jpg");
	  	 return(
	  	 	<div className="container">
	  	 		<h2 className="special-headers"> Alumni </h2> 
	  	 		<div className="row m-1 ">
	  	 			{Batch2019 && Batch2019.map((member, index) => (
	  	 				<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
	  	 					<div className="card">

	  	 						<div className="image-wrapper">
					  				<img className="card-img-top" src={ `${ member.img.default }`} />
					  			</div>
					  			
					  			
	  	 						
	  	 						<div className="card-body text-center">
	  	 							<h4 className="card-title title heading2"> {member.name} </h4>
	  	 							<p className="lead text-muted small"> {member.post}</p>
	  	 						</div>
	  	 					</div>
	  	 				</div>

	  	 				))}
	  	 		</div>
	  	 	</div>
	  	 )


	}
}

