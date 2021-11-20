import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeLanguage } from './../store/actions/language';



export default function Navb() {
    const count = useSelector(state => state.count.counter)
    const language = useSelector(state => state.language.lang);
    const disptach = useDispatch();

    const handleChangeLanguage = () => {
        disptach(ChangeLanguage(language === 'ar' ? "en" : "ar"))
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Movies</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="mx-2" to="/login">Login</Link>
                        <Link className="mx-2" to="/register">Register</Link>
                        <Link className="mx-2" to="/movies">Movies</Link>
                        <Link className="mx-2" to="/favorites">Favorites</Link>
                        <Link className="mx-2" to="/favorites">{count}</Link>
            <button className="btn btn-primary mx-2" onClick={() => handleChangeLanguage()}> Change language </button>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};
