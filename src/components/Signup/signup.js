import "./signup.css"
import React from "react";
import { Container, Form, Nav } from 'react-bootstrap'

const SignUp = (props) => {
    return (
        <Container style={{width: 400}}>
            <Form>
                <h2 className="white-text text-center">Sign Up</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="white-text">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="btn-signup mt-4">
                    <Nav.Link href="/" className="btn-signup-color">
                        <div className="white-text text-center">Sign up</div>
                    </Nav.Link>
                </div>
            </Form>
        </Container>
    );
}

export default SignUp;