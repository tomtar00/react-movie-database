import './header.css';
import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { isExpired, decodeToken } from "react-jwt";

const axios = require('axios');

class Header extends Component {

	handleLogOut = () => {
		//axios({
        //    method: 'post',
        //    url: 'https://pr-movies.herokuapp.com/api/user/logout/:userId',
        //    data: {
        //        userId: id
        //    }
        //}).then((response) => {
        //    console.log(response);
        //}).catch((error) => {
        //    console.log(error);
        //});

		localStorage.removeItem('token')
		window.location.reload(false);
	}

	showOptions = (props) => {
		if (props.logged) {
			return (
				<Nav className="justify-content-end" style={{ width: "100%" }}>
					<Nav.Link className="me-5">LOGGED AS {props.user.name}</Nav.Link>
					<Nav.Link href="/add">ADD MOVIE</Nav.Link>
					<Nav.Link onClick={()=> this.handleLogOut()}>LOG OUT</Nav.Link>
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

		//const user = decodeToken(localStorage.getItem('token'));
		const user = {"name": localStorage.getItem('username')}
		const loggedIn = !isExpired(localStorage.getItem('token'));

		return (
			<Navbar variant="dark" className="flex-column navbar fixed-top">
				<Container>
					<Navbar.Brand href="/" className="flex-column">
						<p className="logo-text">TopMDB</p>
						<p className="desc-text">FIND BEST MOVIES WITH REACT JS</p>
					</Navbar.Brand>
					
					<this.showOptions logged={loggedIn} user={user} />
					
				</Container>
			</Navbar>
		);
	}
}

export default Header;