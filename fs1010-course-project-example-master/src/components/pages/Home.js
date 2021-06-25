import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import splash from '../../assets/images/splash.JPG'

const Home = () => {
    return(
        <main className="containerMain">
            <div className="contentMain">
            <img className="splashImg" src={splash}></img>
                <div className="aboutMe">
                    <hr className="mainHr" />
                    <h1 className="myName">I'm Rob,</h1>
                    <br></br> 
                    an HR professional turned Web Developer. I like to learn things and make stuff.
                    
                </div>
            
            </div>
        </main>
    )
}

export default Home