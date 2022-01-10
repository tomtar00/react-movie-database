import "./home.css"
import React from "react";
import SearchBar from '../elements/searchBar/searchBar.js';
import ThumbnailGrid from '../elements/thumbnailGrid/thumbnailGrid.js';
import { Container, NavDropdown } from 'react-bootstrap'

class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			searchTerm: "",
			sortFunction: this.sortFunctions.titleAscending,
			currentSorFunctionName: "Title (asc)",
			isLoaded: false,
			movies: []
		}
	}

	sortFunctions = {
		//yearAscending: (movie1, movie2) => { return movie1.yearOfProduction - movie2.yearOfProduction },
		//yearDescending: (movie1, movie2) => { return movie2.yearOfProduction - movie1.yearOfProduction },
		titleAscending: (movie1, movie2) => { return movie1.title > movie2.title ? 1 : -1 },
		titleDescending: (movie1, movie2) => { return movie1.title < movie2.title ? 1 : -1 }
	}

	componentDidMount() {
		this.setSortFunction(this.state.sortFunction)

		fetch("https://pr-movies.herokuapp.com/api/movies")
			.then(res => res.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					movies: result
				});
				console.log('movies downloaded')
			},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	setSearchTerm = (value) => {
		this.setState({
			searchTerm: value,
		})
	}
	setCurrentSortName = (value) => {
		this.setState({
			currentSorFunctionName: value
		})
	}
	setSortFunction = (value) => {
		this.setState({
			sortFunction: value
		})
	}

	onDropdownChange = (eventKey) => {
		this.setSortFunction(this.sortFunctions[eventKey])
	}

	render() {
		return (
			<div>
				<SearchBar changeTerm={this.setSearchTerm.bind(this)} />

				<Container style={{ marginTop: 160 }}>

					<NavDropdown
						id="nav-dropdown-dark-example"
						title={`Sort: ${this.state.currentSorFunctionName}`}
						menuVariant="dark"
						onSelect={this.onDropdownChange}
					>
						{/*
							<NavDropdown.Item eventKey="yearAscending">
								<div onClick={(e) => this.setCurrentSortName(e.target.textContent)}>Year (asc)</div>
							</NavDropdown.Item>
							<NavDropdown.Item eventKey="yearDescending">
								<div onClick={(e) => this.setCurrentSortName(e.target.textContent)}>Year (desc)</div>
							</NavDropdown.Item>
							<NavDropdown.Divider />
						*/}
						<NavDropdown.Item eventKey="titleAscending">
							<div onClick={(e) => this.setCurrentSortName(e.target.textContent)}>Title (asc)</div>
						</NavDropdown.Item>
						<NavDropdown.Item eventKey="titleDescending">
							<div onClick={(e) => this.setCurrentSortName(e.target.textContent)}>Title (desc)</div>
						</NavDropdown.Item>
					</NavDropdown>


					<h1 className="text-center" style={{ color: '#dedede' }}>
						{this.state.searchTerm !== "" ?
							<p>Results for "{this.state.searchTerm}"</p>
							:
							<p>Top Movies</p>
						}
					</h1>


				</Container>

				<div>
					{ this.state.isLoaded ?
						<ThumbnailGrid
							movies={this.state.movies}
							searchInput={this.state.searchTerm}
							sortFunction={this.state.sortFunction}
						/>
						:
						null // loading...
					}
				</div>
			</div>

		);
	}
}

export default Home;