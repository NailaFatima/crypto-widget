import React from 'react';
import { Link, NavLink} from "react-router-dom";
import {MdOutlineWindow} from 'react-icons/md';
import {BsFillFileRuledFill} from 'react-icons/bs';
import {AiOutlinePieChart} from 'react-icons/ai';
import {VscGraphLine} from 'react-icons/vsc';
import {VscGraph} from 'react-icons/vsc';
import {RiExchangeDollarLine} from 'react-icons/ri';
import {GiBarrel} from 'react-icons/gi';
import {FiShare2} from 'react-icons/fi';
 import {BsFileText} from 'react-icons/bs';
 import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';

const Sidebar = () =>{
    

	return(
		<div className="col-md-2 sidebar">
		<nav className="d-md-block nav nav-pills nav-stacked">
                
                <Link className=" d-flex pt-5 pb-5"  to="/">
                <div className="logo">N</div>
                <h3 className="header">Name<HiOutlineArrowNarrowLeft className="ms-2"/></h3> 
                </Link>
                
            
            <div>
            <ul className="list-unstyled components">                
                <li>

                    <NavLink className="nav-link" exact="true" to="/"><MdOutlineWindow className="circleicon"/>Home</NavLink> 
                  
                    
                </li>
                <li >

              <NavLink className="nav-link" exact="true" to="/Section2" ><BsFillFileRuledFill className="circleicon"/>Section2</NavLink>
    
                </li>
                <li >
                    <NavLink className="nav-link" to="/Section3"><AiOutlinePieChart className="circleicon"/>Section3</NavLink>
                    
                </li>
                <li>
                    <NavLink className="nav-link" to="/Section4"><VscGraphLine className="circleicon"/>Section4</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Section5"><RiExchangeDollarLine className="circleicon"/>Section5</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Section6"><GiBarrel className="circleicon"/>Section6</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Section7"><VscGraph className="circleicon"/>Section7</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Section8"><FiShare2 className="circleicon"/>Section8</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/Documentation"><BsFileText className="circleicon"/>Documentation</NavLink>
                </li>
            </ul>    
            </div>  
            <div className="footer">
            
                <div className="d-flex">
                    <div className="btn greybg sz">$0.90</div>
                    <button className="btn lbluebg sz">Buy $xyz</button>
                </div>

            </div>  

        </nav>
        </div> 
			
		
		)
};
export default Sidebar;