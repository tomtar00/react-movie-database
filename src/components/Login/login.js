import "./login.css"
import React from "react";
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const axios = require('axios');

const Login = (props) => {

    const history = useHistory();

    const handleLogIn = (e) => {
        e.preventDefault()

        let login = e.target.elements.login.value
        let password = e.target.elements.password.value

        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/user/auth',
            data: {
                login: login,
                password: password
            }
        }).then((response) => {
            console.log('LOGGED IN');
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', login);
            history.push("/");
            window.location.reload(false);
        }).catch((error) => {
            console.log('ERROR:', error);
        });
    }

    return (
        <Container style={{ width: 400 }}>
            <Form onSubmit={handleLogIn}>
                <h2 className="white-text text-center">Log In</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Login</Form.Label>
                    <Form.Control name="login" placeholder="Enter login" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label className="white-text">Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter password" />
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