import "./signup.css"
import React from "react";
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const axios = require('axios');

const SignUp = (props) => {

    const history = useHistory();

    const handleSignUp = (e) => {
        e.preventDefault()

        let username = e.target.elements.username.value
        let email = e.target.elements.email.value
        let password = e.target.elements.password.value

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/create',
            data: {
                name: username,
                email: email,
                password: password
            }
        }).then((response) => {
            console.log('SIGNED UP', response);
            axios({
                method: 'post',
                url: 'https://pr-movies.herokuapp.com/api/user/auth',
                data: {
                    login: username,
                    password: password
                }
            }).then((response) => {
                console.log('LOGGED IN', response);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', username);
                history.push("/");
                window.location.reload(false);
            }).catch((error) => {
                console.log(error.response);
            });
        }).catch((error) => {
            console.log('ERROR:', error.response);
        });
    }

    return (
        <Container style={{width: 400}}>
            <Form onSubmit={handleSignUp}>
                <h2 className="white-text text-center">Sign Up</h2>
                {/*
                    <Form.Group className="mb-3">
                        <Form.Label className="white-text">Login</Form.Label>
                        <Form.Control name="login" placeholder="Enter login" />
                    </Form.Group>
                */}
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Name</Form.Label>
                    <Form.Control name="username" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="white-text">Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter password" />
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