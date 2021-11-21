import "./login.css"
import React from "react";
import { Container, Form, Nav } from 'react-bootstrap'

const Login = (props) => {
    return (
        <Container style={{width: 400}}>
            <Form>
                <h2 className="white-text text-center">Log In</h2>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="white-text">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="btn-login mt-4">
                    <Nav.Link href="/" className="btn-login-color">
                        <div className="white-text text-center">Login</div>
                    </Nav.Link>
                </div>
            </Form>
        </Container>
    );
}

export default Login;