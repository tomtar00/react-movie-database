import "./movie.css"
import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { FiPlayCircle } from 'react-icons/fi';
import ProgressCircle from "../common/progressCircle/progressCircle";
import ReactStars from "react-rating-stars-component";

class Movie extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			movie: null
		}
		this.state.movieId = this.props.match.params.id;
		//this.state.movie = require('../../db.json').movies.find((m) => m.id === Number(this.state.movieId));
	}

	componentDidMount() {
		fetch(`https://pr-movies.herokuapp.com/api/movies/${this.state.movieId}`)
			.then(res => res.json())
			.then((result) => {
				this.setState({
					isLoaded: true,
					movie: result
				});
			},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
					console.log('ERROR:', error);
				}
			)
	}

	render() {
		//const avgRating = this.state.movie.sumVotes / this.state.movie.numVotes
		if (this.state.isLoaded) {
			return (
				<Container>
					<Row>
						<Col sm={4}>
							<img src={this.state.movie.image} alt={this.state.movie.title} className="movie-thumbnail-poster" />
						</Col>
						<Col sm={8}>
							
							<h2 className="movie-title">{this.state.movie.title}</h2>
							{/*
							<div>
								<span className="border me-5">{this.state.movie.yearOfProduction}</span>
								{
									this.state.movie.genre.map((g, i) => (
										<span className="border me-2" key={i}>{g.name}</span>
									))
								}
								<span className="white-text ms-5 font-l">{this.state.movie.duration.hours}h {this.state.movie.duration.minutes}min</span>
							</div>

							<div className="mt-5 row-direction">
								<ProgressCircle
									radius="25"
									strokeWidth="4"
									strokeColor="#6464FF"
									fillColor="#13151f"
									progress={avgRating.toFixed(1)}
									fontsize={18}
								/>

								<Nav.Link href={this.state.movie.trailer} target="_blank" className="trailer-button row-direction ms-3">
									<FiPlayCircle className="play-trailer-icon" />
									<div className="play-trailer-text">PLAY TRAILER</div>
								</Nav.Link>
							</div>
							*/}

							<div className="mt-5">
								<div className="white-text font-m" style={{fontWeight: 1}}>STORYLINE</div>
								<div className="white-text mt-2">
									{this.state.movie.content}
								</div>
							</div>

							{/*
							<div className="mt-4">
								<span className="white-text" style={{fontWeight: 1}}>{this.state.movie.views} page views</span>
							</div>
							*/}

							{/* IF LOGGED IN */}
							<div className="mt-4" style={{lineHeight: 1}}>
								<span className="white-text">Your rating:</span>
								<ReactStars
									count={10}
									onChange={(x) => { console.log(x) }}
									size={24}
									isHalf={true}
									emptyIcon={<i className="far fa-star"></i>}
									halfIcon={<i className="fa fa-star-half-alt"></i>}
									fullIcon={<i className="fa fa-star"></i>}
									activeColor="#ffd700"
								/>
							</div>

						</Col>
					</Row>
				</Container>
			);
		}
		else 
			return (
				<></>
			);
	}
}

export default Movie;