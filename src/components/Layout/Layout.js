import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Header from './Header';
import Sidebar from './Sidebar';
import MidPortion from './MidPortion';
import LastPortion from './LastPortion';

const Layout =()=>{
	
	
	return(
		<>
		  <Container fluid>
		    <Row>
		    	<Header/>
		    </Row>
			<Row>
				<Col xs={2}> <Sidebar/> 
				</Col>
				
				 <Col xs={7} className="mportion">
				 <MidPortion/>
				 </Col>
				<Col xs={3} className="lportion">
					<LastPortion/>
				</Col>
			</Row>
			</Container>
			
		</>
		)

};
export default Layout;