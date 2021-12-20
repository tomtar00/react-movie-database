import "./login.css"
import React from "react";
import { Container, Form, Button } from 'react-bootstrap'

const Login = (props) => {

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log('handle', e.target.elements)
    }

    return (
        <Container style={{width: 400}}>
            <Form onSubmit={handleSignUp}>
                <h2 className="white-text text-center">Log In</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Login</Form.Label>
                    <Form.Control placeholder="Enter login" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <div className="btn-login">
                    <Button className="btn-login-color mt-5" type="submit">
                        Log In
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;