import './thumbnail.css';
import React from 'react';
import { Nav } from 'react-bootstrap'
import ProgressCircle from '../../common/progressCircle/progressCircle';

const Thumbnail = (props) => {
    const movie = props.movieData
    const clickable = props.clickable
    const avgRating = movie.sumVotes / movie.numVotes
    return (
        <div className="movie-thumbnail-block">
            {clickable ?
                <Nav.Link href={`/movie/${movie.id}`} className="movie-thumbnail-link">
                    <img src={movie.img} alt={movie.title} className="movie-thumbnail-image" />
                </Nav.Link>
                :
                <img src={movie.img} alt={movie.title} />
            }

            <div className="movie-thumbnail-bottom">
                <div>
                    <p className='movie-thumbnail-year'>{movie.yearOfProduction}</p>
                    <p className='movie-thumbnail-title'>{movie.title}</p>
                </div>
                <ProgressCircle 
                    radius="20" 
                    strokeWidth="3" 
                    strokeColor="#6464FF" 
                    fillColor="#13151f" 
                    progress={avgRating.toFixed(1)} 
                    fontsize={13}
                />
            </div>
        </div>
    )
}

export default Thumbnail;