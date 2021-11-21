import "./notFound.css"
import React from "react";
import { Container, Nav } from 'react-bootstrap'

const NotFound = () => {
    return (
        <Container>
            <div className="center-content">
                <h1 className="display-4">404 - Not found!</h1>
                <p className="lead">Page you are looking for does not exist.</p>
                <hr className="my-4" />
                <p>Go back to Home</p>
                <div className="btn-home">
                    <Nav.Link href="/" className="btn-color">
                        <div className="white-text">Home</div>
                    </Nav.Link>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;