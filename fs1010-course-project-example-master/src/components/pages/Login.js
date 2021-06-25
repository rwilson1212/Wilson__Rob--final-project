import React, { useState } from 'react'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardText } from 'reactstrap'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(true)

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username, password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

    return (
        <main className="containerMainLong">
          <div className="contentMainLong">
        {!auth && 
            <Card className="text-white bg-primary my-5 py-4 text-center" className="formCardErr">
            <CardBody>
                <CardText className="text-white m-0" className="formCardTextErr">Invalid credentials, please try again</CardText>
            </CardBody>
        </Card>
        }

            <Card className="text-white bg-primary my-5 py-4 text-center" className="formCard">
              <CardBody>
                  <CardText className="text-white m-0" className="formCardText">Enter credentials below</CardText>
              </CardBody>
          </Card>

        <hr className="mainHr" />
        <Form className="my-5" className="contactForm" onSubmit={loginSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="usernameEntry"></Label>
                <Input type="text" className="field" name="username" id="usernameEntry" placeholder="Username" bsSize="lg" value={username} onChange={e => setUsername(e.target.value)}/>
              </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="passwordEntry"></Label>
                <Input type="password" className="field" name="password" id="passwordEntry" placeholder="Valid password" bsSize="lg" onChange={e => setPassword(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>
          <Button className="loginButton" color="warning"><strong>Sign in</strong></Button>
          
        </Form>
        <div className="adminLoginText"> administrator login <span className="loginEmoji">&#128225;</span> </div>
        </div>
        </main>
    )
}

export default Login