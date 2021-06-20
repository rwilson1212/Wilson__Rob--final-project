import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'
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
    const toggle = () => setIsOpen(!isOpen)

    return (
       
      <header className="sidebarFrame">
      <div className="sidebarBox1">
        <img className="me" src= {rob} alt="picture of Rob" />
        <h1 className="mainHeader">Rob Wilson 😎</h1>
        <h2 className="mainHeader"><a className="sidebarHeader" href="https://developer.mozilla.org/en-US/"><strong>Aspiring Web Developer</strong> </a> </h2>
        <div className="socialMedia">
          <a className="socialM" href="https://www.facebook.com/" target="_blank"><img className="socialMedImage" src={fb} alt="Connect on Facebook" width={30} /></a>
          <a className="socialM" href="https://www.instagram.com/?hl=en" target="_blank"><img className="socialMedImage" src={ig} alt="Connect on Instagram" width={30} /></a>
          <a className="socialM" href="https://twitter.com/?lang=en" target="_blank"><img className="socialMedImage" src={tw} alt="Connect on Twitter" width={30} /></a>
        </div>
        <hr className="sidebarHr" />
      </div>
      <nav>
        <div className="dropdown">
          <button className="dropbtn"><img className="filter" src={menu} alt="Navigation" height={25} /></button>
          <div className="dropdown-content">
            <table className="linksTable">
              <tbody><tr>
                  <td><img className="filter" src={home} alt="home icon" height={25} /></td>
                  <td><a href="#splash">Home</a></td>
                </tr>
                <tr>
                  <td><img className="filter" src={file} alt="home icon" height={25} /></td>
                  <td><a href="#resume"> Resume </a> </td>
                </tr>
                <tr>
                  <td><img className="filter" src={laptop} alt="home icon" height={25} /></td>
                  <td><a href="#portfolio"> Projects </a></td>
                </tr>
                <tr>
                  <td><img className="filter" src={envelope} alt="home icon" height={25} /></td>
                  <td><a href="#contact"> Contact Me </a></td>
                </tr>
                <tr>
                  <td><img className="filter" src={idea} alt="home icon" height={25} /></td>
                  <td><a href="#stuffIDo"> Other Stuff I Do </a></td>
                </tr>
              </tbody></table> 
          </div>
        </div>            
      </nav>
    </header>
  );
    
}

export default Navigation