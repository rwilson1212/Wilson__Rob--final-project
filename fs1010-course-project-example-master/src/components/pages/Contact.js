import React, { useState } from 'react'
import { Alert, Form, FormGroup, Col, Input, Label, Button, Container, CardBody, Card, CardText } from 'reactstrap'




const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
            

        })

        


        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }

        setName("");
        setEmail("");
        setPhoneNumber("");
        setContent("");
    }

    return (
        <main className="containerMainLong">
            <div className="contentMainLong">
                
            <Card className="text-white bg-secondary my-5 py-4 text-center" className="formCard">
                <CardBody>
                    <CardText className="text-white m-0" className="formCardText">Use form below to reach out to me</CardText>
                </CardBody>
            </Card>
            <hr className="mainHr" />
            <Form className="my-5" className="contactForm" onSubmit={formSubmit}>
                <FormGroup row>
                    <Label for="emailEntry" sm={2} hidden>Email</Label>
                    <Col sm={8}>
                    <Input className="field" type="email" name="email" id="emailEntry" placeholder="Enter email to contact" bsSize="lg" required value={email} onChange={e => setEmail(e.target.value) }/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phoneEntry" sm={2} hidden>Phone Number</Label>
                    <Col sm={8}>
                    <Input  className="field" type="phone" name="phone" id="phoneEntry" placeholder="Enter phone number" bsSize="lg" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nameEntry" sm={2} hidden>Full Name</Label>
                    <Col sm={8}>
                    <Input  className="field" type="name" name="name" id="nameEntry" placeholder="Enter your full name" bsSize="lg" required value={name} onChange={e => setName(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="messageEntry" sm={2}hidden >Message</Label>
                    <Col sm={8}>
                    <Input className="field" type="textarea" name="text" id="messageEntry"placeholder="Message" bsSize="lg" required value={content} onChange={e => setContent(e.target.value)}/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button className="contactButton" color="warning"><strong>Submit</strong></Button>
                    </Col>
                </FormGroup>
            </Form>
            
            <p className= "contactDirect">you can also contact me directly at <span className="myEmail">rob@gmail.com &#128172;</span> </p>
            
            </div>
        </main>
      )
    }

    export default Contact