import React, { Component } from "react";
import "./infog.css";
import info1 from "../../media/images/innovationicon.png";
import info2 from "../../media/images/seminaricon.png";
import info3 from "../../media/images/researchicon.png";
import info4 from "../../media/images/networkingicon.png";
import Fade from 'react-reveal/Fade';



class InfoG extends Component {
  
  render() {
      return (
        <div className="text-center main-container intro-info">
        	
			  <div className="row">
			  <Fade up delay={200}>
		        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
		          <div className="img img-box">
		            <img src={info1} />

		          </div>
		          <div className="text-box">
		            <h5 className="display">Providing the perfect platform for all to
		              collaborate and innovate.</h5>
		          </div>
		        </div>
		        </Fade>
		        <Fade up delay={400}>
		        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
		          <div className="img img-box">
		            <img src={info2} />
		          </div>
		          <div className="text-box">
		            <h5 className="display">Attend seminars and workshops on the most trending
		              and interesting topics led by leading scientists and industry personnel</h5>
		          </div>
		        </div>
		        </Fade>
		        <Fade up delay={600}>
		        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
		          <div className="img img-box">
		            <img src={info3} />
		          </div>
		          <div className="text-box">
		            <h5 className="display">Collaborate with the best minds to take your
		              projects to the next level.</h5>
		          </div>
		        </div>
		        </Fade>
		        <Fade up delay={800}>
		        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
		          <div className="img img-box">
		            <img src={info4} />
		          </div>
		          <div className="text-box">
		            <h5 className="display">Expand your network by connecting with the best
		              minds in the field.</h5>
		          </div>
		        </div>
		        </Fade>
		      </div>
			
        </div>
          
      )
  }
}

export default InfoG;




















