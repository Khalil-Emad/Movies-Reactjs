import React from 'react';
import { Formik } from 'formik';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const Login = () => (
    <div>
        <h1>Login</h1>
        <Card className="card">
            <Card.Body>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Email Address is Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Email Address is invalid';
                        }

                        if (!values.password) {
                            errors.password = 'Password is Required';
                        } else if (
                            !/^[A-Z0-9._%+-]{8,}$/i.test(values.password)
                        ) {
                            errors.password = 'Password must be 8 or more characters';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <h5>Email Address</h5>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control ${errors.email ? "border-danger" : ""
                                            }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <small className="text-danger">{errors.email && touched.email && errors.email}</small>
                                    <br />
                                    <br />
                                    <h5>Password</h5>
                                    <input
                                        type="password"
                                        name="password"
                                        className={`form-control ${errors.passwords ? "border-danger" : ""
                                            }`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <small className="text-danger">{errors.password && touched.password && errors.password}</small>
                                    <br />
                                    <br />
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                        Login
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    </div>
);

export default Login;