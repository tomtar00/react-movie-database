import "./addMovie.css"
import React from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import { useHistory } from "react-router-dom";

const axios = require('axios');

const AddMovie = (props) => {

    const history = useHistory();

    const genres = [
        { name: 'Action' },
        { name: 'Thriller'},
        { name: 'Adventure' },
        { name: 'Science Fiction' },
        { name: 'Drama' },
        { name: 'Horror' },
        { name: 'Crime' }
    ]

    const multiselectRef = React.createRef();

    const handleAdd = (e) => {
        e.preventDefault()
        //const movie = {
        //    'title': e.target.elements.title.value,
        //    'description': e.target.elements.description.value,
        //    'year': e.target.elements.year.value,
        //    'img': e.target.elements.img_link.value,
        //    'trailer': e.target.elements.trailer_link.value,
        //    'duration': {
        //        'hours': e.target.elements.hours.value,
        //        'minutes': e.target.elements.minutes.value
        //    },
        //    'genre': multiselectRef.current.state.selectedValues
        //}

        
        axios({
            method: 'post',
            url: 'https://pr-movies.herokuapp.com/api/movies',
            data: {
                title: e.target.elements.title.value,
                image: e.target.elements.img_link.value,
                content: e.target.elements.description.value
            }
        }).then((response) => {
            console.log('MOVIE ADDED');
            history.push("/");
        }).catch((error) => {
            console.log('ERROR:', error);
        });
    }

    return (
        <Container style={{ width: 600}}>
            <Form onSubmit={handleAdd}>
                <h2 className="white-text text-center">Add Movie</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Title</Form.Label>
                    <Form.Control name="title" placeholder="Enter title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Description</Form.Label>
                    <Form.Control as="textarea" name="description" rows={3} placeholder="Enter description" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Image link</Form.Label>
                    <Form.Control name="img_link" placeholder="Enter link" />
                </Form.Group>

                {/*
                <Form.Group className="mb-5">
                    <Form.Label className="white-text">Year of production</Form.Label>
                    <Form.Control name="year" placeholder="Enter year" />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label className="white-text">Trailer link</Form.Label>
                    <Form.Control name="trailer_link" placeholder="Enter link" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="white-text">Duration (hours)</Form.Label>
                        <Form.Control name="hours" placeholder="Enter hours" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="white-text">Duration (minutes)</Form.Label>
                        <Form.Control name="minutes" placeholder="Enter minutes" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label className="white-text">Genres</Form.Label>
                    <Multiselect
                        name="genres"
                        options={genres}
                        displayValue="name"
                        hidePlaceholder={true}
                        avoidHighlightFirstOption={true}
                        ref={multiselectRef}
                    />
                </Form.Group>
                */}
                
                <div className="btn-add-center">
                    <Button className="btn-add mt-5" type="submit">
                        Add
                    </Button>
                </div>

            </Form>
        </Container>
    );
}

export default AddMovie;