import React from 'react';
import {Row,Col} from "react-bootstrap";
import NavMid from './NavMid';
import img from '../Assets/img.png';
import {BsBoxArrowInUpRight} from 'react-icons/bs';
import {BiCopy} from 'react-icons/bi';
import {BiWalletAlt} from 'react-icons/bi';


const MidPortion = () =>{
	return(
		   <div className="ms-4 me-4">
		 <Row className="headmid">
		 	<h6 className="col text-left">Section</h6>
		 	<div className="right d-flex greybg headdiv"><p><BiWalletAlt className="wallet"/>0.2 $xyz</p> <button className="btn rounded lbluebg">Tier1</button></div>
		 </Row>
		 <Row>
		   	<div className="toaststyle d-flex">
		   	{/* <CloseButton variant='white' aria-label='Hide'/> */}
		   	<div>
   	 	 	 <p>lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
   	 	 	 <button>Tutorial</button>
   	 	 	 </div>
   	 	 	 <div>
   	 	 	 	<img src={img} alt="BitBarrel" width="114px" height="90px"/>
   	 	 	 </div>
   	 	 </div>
		   </Row>
		<Row>
			<div className="card bcard">
			  <div className="card-body d-flex">
			  
			  <div>
			    <p className="card-title">Your reward</p>			    
			    <h5 className="card-text">$0.26231428</h5>
			    <div className="d-flex">
			    <p className="greybg p-1 me-1">$40AVAX</p><p className="greybg p-1 me-1">$10BNB</p><p className="greybg p-1 me-1">$210BTC</p>
			    </div>
			    </div>
			    <div>
			    	<button className="btn bluebtn"><BsBoxArrowInUpRight/>Custom Link</button>
			    </div>
			   
			  </div>
			</div>
		</Row>
		<Row>
		 <Col className="card scard m-2">
	      <div className="card-body">
	        <h5 className="card-title">12.5% of fee</h5>
	        <p className="card-text">Your Referral link for xyz</p>
	        <a href="/" className="greybg p-2">https://unityexchange.design<BiCopy 
	        onClick={()=>navigator.clipboard.writeText('copy this text to clipboard')} 
	        className="ms-2"/></a>
	      </div>
		</Col>
		<Col className="card scard m-2">
	      <div className="card-body">
	        <h5 className="card-title">12.5% of fee</h5>
	        <p className="card-text">Your Referral link for xyz</p>
	        <a href="/" className="greybg p-2">https://unityexchange.design<BiCopy 
	           onClick={()=>navigator.clipboard.writeText('copy this text to clipboard')} 
	         className="ms-2"/>
	         </a>
	      </div>
	      </Col>
		</Row>
		<Row>
			<NavMid/>
		</Row>
		</div>
		
		
		)
};
export default MidPortion;