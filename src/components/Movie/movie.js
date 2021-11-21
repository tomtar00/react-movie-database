import "./movie.css"
import React, { Component } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { FiPlayCircle } from 'react-icons/fi';
import ProgressCircle from "../common/progressCircle/progressCircle";
import ReactStars from "react-rating-stars-component";

class Movie extends Component {

	constructor(props) {
		super(props);
		this.movieId = this.props.match.params.id;
		this.movie = require('../../db.json').movies.find((m) => m.id === Number(this.movieId));
	}

	render() {
		const avgRating = this.movie.sumVotes / this.movie.numVotes
		return (
			<Container>
				<Row>
					<Col sm={4}>
						<img src={this.movie.img} alt={this.movie.title} className="movie-thumbnail-poster" />
					</Col>
					<Col sm={8}>
						<h2 className="movie-title">{this.movie.title}</h2>
						<div>
							<span className="border me-5">{this.movie.yearOfProduction}</span>
							{
								this.movie.genre.map((g, i) => (
									<span className="border me-2" key={i}>{g.name}</span>
								))
							}
							<span className="white-text ms-5 font-l">{this.movie.duration.hours}h {this.movie.duration.minutes}min</span>
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

							<Nav.Link href={this.movie.trailer} target="_blank" className="trailer-button row-direction ms-3">
								<FiPlayCircle className="play-trailer-icon" />
								<div className="play-trailer-text">PLAY TRAILER</div>
							</Nav.Link>
						</div>

						<div className="mt-5">
							<div className="white-text font-m" style={{fontWeight: 1}}>STORYLINE</div>
							<div className="white-text mt-2">
								{this.movie.description}
							</div>
						</div>

						<div className="mt-4">
							<span className="white-text" style={{fontWeight: 1}}>{this.movie.views} page views</span>
						</div>

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
}

export default Movie;