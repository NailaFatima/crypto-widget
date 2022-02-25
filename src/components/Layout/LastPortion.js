import React from 'react';
import {Row,Col} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Avax from '../Assets/avax.png';
import {BsBoxArrowInUpRight} from 'react-icons/bs';
import {BiWalletAlt} from 'react-icons/bi';

const LastPortion = () =>{

	return(
		<>
		<Row className="mt-3">
		<div className="col">
		  
		  <Dropdown>
			  <Dropdown.Toggle variant="dark" id="dropdown-basic">
			  <img id="avx" alt="coinImg" src={Avax}/> Avalanche
			  </Dropdown.Toggle>

			  <Dropdown.Menu>
			    <Dropdown.Item href="/">Action1</Dropdown.Item>
			    <Dropdown.Item href="/">Action2</Dropdown.Item>
			    <Dropdown.Item href="/">Action3</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
		</div>
		<div className="col">
		 
		   <Dropdown>
			  <Dropdown.Toggle variant="dark" id="dropdown-basic">
			  <BiWalletAlt className="wallet"/>0XF6...1353
			  </Dropdown.Toggle>

			  <Dropdown.Menu>
			    <Dropdown.Item href="/">Action</Dropdown.Item>
			    <Dropdown.Item href="/">Another action</Dropdown.Item>
			    <Dropdown.Item href="/">Something else</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
		</div>
		</Row>
		<Row>
		   <form className="form-group">
			<h4 className="m-3">Custom Link</h4>
			<a className="m-3" href="/">http://testnetxyzxyx/rcode?*</a>
			<input className="form-control greybg" type="text" placeholder="Enter"/>
			<Col>
			<button className="btn blue"><BsBoxArrowInUpRight className="me-2"/>Custom Link</button>
			<button className="btn border ms-1">Cancel</button>
			</Col>
			</form>
		</Row>
		</>
		)
};
export default LastPortion;