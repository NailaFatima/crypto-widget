import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Tabs,Tab} from 'react-bootstrap';
import './style/table.css';
const NavMid=()=>{
	const [userdata,setUserData]=useState([]);
	useEffect(()=>{
		fetchData();

	},[]);
	const fetchData= async ()=>{
		const res= await Axios.get("https://raw.githubusercontent.com/akshita151199/APIs/main/data");
		
		setUserData(res.data.data);
	};
	
    return(
    	<>
    
		<Tabs defaultActiveKey="first tab" id="uncontrolled-tab-example" className="mb-3 ">
		  <Tab id="tabsty" eventKey="first tab" title="First Tab" className="tabstyle">
		    <table className="table">
						  <thead>
						    <tr>    
						      <th scope="col">Asset</th>
						      <th scope="col">AMOUNT</th>
						      <th scope="col">USER ACCOUNT</th>
						      <th scope="col">REFERRAL EARNING</th>
						    </tr>
						  </thead>
						  <tbody>
						  {userdata.map((user,index)=>(
						  	<tr key={index}>
						  	<td className="d-flex">
						  	<div>
						  	<img src={user.img} alt="coinPic"/>
						  	</div>
						  	<div>
						  	<p>{user.asset}</p>
						  	<div>
						  	<p className="greytxt">{user.type}</p>
						  	
						  	<p className="greybg dinline"></p>
						  	<img src={user.chain.img} alt="exgCoinPic" width="20px" height="20px"/>
						  	<p className="txtformate">{user.chain.name}</p>
						  	</div>
						  	</div>
						  	</td>
						  	<td><p>{user.amount}</p>
						  		<p className="greytxt">{user.state}</p>
						  	</td>
						  	<td>{user.user}</td>
						  	<td>{user.referral_earnings}</td>
						  	</tr>
						  ))}   
						  </tbody>
						</table>

  </Tab>
  <Tab eventKey="second tab" title="Second Tab">
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	  </p>
  </Tab>
  
</Tabs>

    	</>

    	);
};
export default NavMid;