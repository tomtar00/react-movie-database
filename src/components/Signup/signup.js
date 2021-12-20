import "./signup.css"
import React from "react";
import { Container, Form, Button } from 'react-bootstrap'

const SignUp = (props) => {

    const handleSignUp = (e) => {
        e.preventDefault()
        console.log('handle', e.target.elements)
    }

    return (
        <Container style={{width: 400}}>
            <Form onSubmit={handleSignUp}>
                <h2 className="white-text text-center">Sign Up</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Login</Form.Label>
                    <Form.Control placeholder="Enter login" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Name</Form.Label>
                    <Form.Control placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="white-text">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                
                <div className="btn-signup">
                    <Button className="btn-signup-color mt-5" type="submit">
                        Sign Up
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default SignUp;