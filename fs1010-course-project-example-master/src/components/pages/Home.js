import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import splash from '../../assets/images/splash.JPG'

const Home = () => {
    return(
        <main className="containerMain">
            <div className="contentMain">
            <div className= "splashContainer">
            <img className="splashImg" src={splash} alt="image of a laptop a notebad and a HTML and CSS for beginners book arranged on a desk"></img>
                <div className="aboutMe">
                    <hr className="mainHr" />
                    <h1 className="myName">I'm Rob, &#128190;</h1>
                    <br></br> 
                    an HR professional turned Web Developer. I like to learn things and make stuff.
                    
                </div>
                </div>
            </div>
        </main>
    )
}

export default Home