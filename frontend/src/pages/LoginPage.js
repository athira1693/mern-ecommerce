import React, { useState } from 'react'
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className='mt-5 justify-content-md-center'>
        <Col md={6}>
          <h1>Login</h1>
        </Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' md="4" controlId="formBasicEmail">
            <Form.Label>Enter email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
              name='email'
            />
          </Form.Group>
          <Form.Group className='mb-3' md="4" controlId="formBasicPassword">
            <Form.Label>Enter password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name='password'

            />

          </Form.Group>
          <Form.Group className='mb-3' md="4" controlId="formBasicCheckboc">
            <Form.Check
              type="checkbox"
              name='doNotLogout'
              label='Do not logout'
            />
          </Form.Group>
          <Row className='pb-2'>
            <Col>
              Don't you have an accout?
              <Link to='/register'> Register </Link>
            </Col>
          </Row>
          <Button variant='primary' type="submit">
            <Spinner
              as="span"
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Login</Button>
          <Alert show={true} variant='danger'>
            Wrong credentials
          </Alert>
        </Form>
      </Row>
    </Container>
  )
}

export default LoginPage