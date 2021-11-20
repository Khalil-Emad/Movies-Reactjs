import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import { useState, useEffect } from "react";
import { RemoveFavorite } from "./../../store/actions/toFavorite";


function Favorites() {
    const fav = useSelector(state => state.favorite.favList)
    const disptach = useDispatch();
    const [favMovies, setFavMovies] = useState([]);

    const Delete = (id, index) => {
        if (fav.find((favMovies) => favMovies.id === id)) {
            fav.splice(index, 1);
        }
        setFavMovies([...fav]);
        disptach(Delete(RemoveFavorite));

    }
    useEffect(() => {
        setFavMovies([...fav]);
    }, [fav]);

    return (
        <div>
            <h2>Favorits</h2>
            <Row xs={1} md={2} className="g-4">
                {fav?.map((movie, index) => {
                    return (
                        <Col key={index}>
                            <Card>
                                <Link to={`/moviesDetails/${movie.id}`} >
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.backdrop_path} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{movie.original_title}</Card.Title>
                                    <button onClick={() => Delete(movie.id, index)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default Favorites;