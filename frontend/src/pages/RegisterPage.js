import React, { useState } from 'react'
import { Alert, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
          <h1>Register</h1>
        </Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' md="4" controlId="formBasicFirstName">
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
              name='name'
            />
            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' md="4" controlId="formBasicLastName">
            <Form.Label>Enter last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your last name"
              name='lastname'
            />
            <Form.Control.Feedback type="invalid">Please enter last name</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' md="4" controlId="formBasicEmail">
            <Form.Label>Enter email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email"
              name='email'
            />
            <Form.Control.Feedback type="invalid">Please enter valid email</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' md="4" controlId="formBasicPassword">
            <Form.Label>Enter password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name='password'
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
            <Form.Text className='text-muted'>
              Password should have at least 6 characters
            </Form.Text>
          </Form.Group>
          <Form.Group className='mb-3' md="4" controlId="formBasicPasswordRepeat">
            <Form.Label>Enter password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Repeat Password"
              name='confirmPassword'
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">Both passwords should match</Form.Control.Feedback>
          </Form.Group>

          <Row className='pb-2'>
            <Col>
              Do you have an account already?
              <Link to='/login'> Login </Link>
            </Col>
          </Row>
          <Button type="submit">
            <Spinner
              as="span"
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Submit</Button>
          <Alert show={true} variant='danger'>
            User with that email already exists!
          </Alert>
          <Alert show={true} variant='success'>
            User created!
          </Alert>
        </Form>
      </Row>
    </Container>
  )
}

export default RegisterPage