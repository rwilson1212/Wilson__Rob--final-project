import React from 'react'
import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'
import splash from '../../assets/images/splash.JPG'

const Home = () => {
    return(
        <main className="containerMain">
            <div className="contentMain">
            <img className="splashImg" src={splash}></img>
            <p className="aboutMe"><strong>I'm Rob,</strong><br></br> an HR professional turned Web Developer. I like to learn things and make stuff.</p>
            </div>
        </main>
    )
}

export default Home