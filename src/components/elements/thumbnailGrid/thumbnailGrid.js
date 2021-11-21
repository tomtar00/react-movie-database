import './thumbnailGrid.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Thumbnail from '../thumbnail/thumbnail';
import database from '../../../db.json';

const ThumbnailGrid = (props) => {
    return (
        <Container>
            <Row className='movie-thumbnail-grid-row'>
                {
                    database.movies
                        .filter((movie) => {
                            const searchTerm = props.searchInput
                            if (searchTerm === "")
                                return true;
                            else
                                return movie.title.toLowerCase().includes(searchTerm.toLowerCase()) })
                        .sort((x, y) => props.sortFunction(x, y))
                        .map((movie) => (
                            <Col lg={3} md={4} sm={6} className="movie-thumbnail-grid-col" key={movie.id}>
                                <Thumbnail movieData={movie} clickable={true}/>
                            </Col>
                        ))
                }
            </Row>
        </Container>
    )
}

export default ThumbnailGrid;