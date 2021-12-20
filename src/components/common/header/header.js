import './header.css';
import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'

class Header extends Component {

	showOptions = (props) => {
		if (/*login bool*/false) {
			return (
				<Nav className="justify-content-end" style={{ width: "100%" }}>
					<Nav.Link href="/add">ADD MOVIE</Nav.Link>
					<Nav.Link >LOG OUT</Nav.Link>
				</Nav>
			)
		}
		else {
			return (
				<Nav className="justify-content-end" style={{ width: "100%" }}>
					<Nav.Link href="/login">LOG IN</Nav.Link>
					<Nav.Link href="/signup">SIGN UP</Nav.Link>
				</Nav>
			)
		}
	}

	render() {
		return (
			<Navbar variant="dark" className="flex-column navbar fixed-top">
				<Container>
					<Navbar.Brand href="/" className="flex-column">
						<p className="logo-text">TopMDB</p>
						<p className="desc-text">FIND BEST MOVIES WITH REACT JS</p>
					</Navbar.Brand>
					
					<this.showOptions />
					
				</Container>
			</Navbar>
		);
	}
}

export default Header;