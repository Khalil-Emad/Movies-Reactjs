import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axios";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { AddToFavorite } from './../../store/actions/toFavorite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid'
import { Counter } from './../../store/actions/toFavorite';



export default function Movies() {

    const [pages, setPages] = useState(1);

    const [movies, setMovies] = useState([]);

    let favCount = useSelector(state => state.count.count)
    // const [counter, setCounter] = useState(0);


    useEffect(() => {
        axiosInstance
            .get("movie/popular", {
                params: {
                    page: pages,
                    api_key: "8c0fda4387850be57a1f88285910cdda"
                },
            })
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));
    }, [pages]);

    const Prev = () => {
        if (pages > 1) {
            let i = pages;
            i--;
            setPages(i)
        }
    }

    const next = () => {
        if (pages < 100) {
            let i = pages;
            i++;
            setPages(i)
        }
    }

    const disptach = useDispatch();

    const addToFavorites = (mov) => {
        disptach(AddToFavorite(mov))
        let i = favCount;
        i++;
        // setCounter(i)
        disptach(Counter(i))
    }

    

    return (
        <div>
            
            <h2>Movies</h2>
            <Row xs={1} md={2} className="g-4">
                {movies.map((movie) => {
                    return (
                        <Col key={movie.id}>
                            <Card>
                                <Link to={`/moviesDetails/${movie.id}`} >
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.backdrop_path} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{movie.original_title}</Card.Title>
                                    <Button onClick={() => addToFavorites(movie)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            <Button className="btn btn-primary" onClick={Prev}>Previous </Button>
            <Button className="btn btn-primary" onClick={next}>Next </Button>
        </div>
    );
}
