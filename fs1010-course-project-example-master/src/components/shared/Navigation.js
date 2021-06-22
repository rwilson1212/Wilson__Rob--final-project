import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
import '../../../src/App'
import rob from '../../assets/images/rob.png'
import fb from '../../assets/images/facebook (2).svg'
import ig from '../../assets/images/instagram (2).svg'
import tw from '../../assets/images/twitter (1).svg'
import menu from '../../assets/images/menu.svg'
import home from '../../assets/images/home (1).png'
import file from '../../assets/images/file.svg'
import laptop from '../../assets/images/laptop.svg'
import envelope from '../../assets/images/envelope.svg'
import idea from '../../assets/images/idea.svg'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
       
     <header>
        <nav >
                  
        <Navbar className="sideBarNav">
            <div className="imgContainer">
                <img className="robImg" src={rob}></img>
                <h1>Rob Wilson 😎</h1>
                <h2>Aspiring Web Developer</h2>
            </div>
            <hr className="mainHr"></hr>
                    <Nav>
                    <table className="linksTable">
                    <tr>
                    <NavItem className="navLinks" >
                        <td><NavLink style={{color:'honeydew'}} tag={RouteLink} to="/"><img className="navImg" src={home}></img>Home</NavLink></td>
                    </NavItem>
                    </tr>
                    <NavItem className="navLinks">
                        <NavLink style={{color:'honeydew'}} tag={RouteLink} to="/about"><img className="navImg" src={home}></img>About Me</NavLink>
                    </NavItem>
                    <NavItem className="navLinks">
                        <NavLink style={{color:'honeydew'}} tag={RouteLink} to="/projects"><img className="navImg" src={laptop}></img>Projects</NavLink>
                    </NavItem>
                    <NavItem className="navLinks">
                        <NavLink style={{color:'honeydew'}} tag={RouteLink} to="/resume"><img className="navImg" src={file}></img>Resume</NavLink>
                    </NavItem>
                    <NavItem className="navLinks">
                       <NavLink style={{color:'honeydew'}} tag={RouteLink} to="/contact"><img className="navImg" src={envelope}></img>Contact Me</NavLink>
                    </NavItem>
                    <NavItem className="navLinks">
                        <NavLink style={{color:'honeydew'}} tag={RouteLink} to="/submissions"><img className="navImg" src={home}></img>Login</NavLink>
                    </NavItem>
                    </table>
                </Nav>
            
            
        </Navbar>
          
         
      </nav>
    </header>
  );
    
}

export default Navigation