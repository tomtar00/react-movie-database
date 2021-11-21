import "./searchBar.css"
import React from "react";
import { Container, FormControl } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import { FiSearch } from 'react-icons/fi'

const SearchBar = (props) => {
	return (
		<Container fluid={true} className="search-bar-container fixed-top">
			<Container className="mb-3">
				<InputGroup>
					<InputGroup.Text>
						<FiSearch style={{ color: "black" }} />
					</InputGroup.Text>
					<FormControl
						onChange={event => { props.changeTerm(event.target.value) }}
						ref={this}
						type="search"
						placeholder="Search for a movie"
						aria-label="Search"
					/>
				</InputGroup>
			</Container>
		</Container>
	);
}

export default SearchBar;