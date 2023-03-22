import React, { useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = () => {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirmPassword]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  };

  return (
    <Container>
      <Row className='mt-5 justify-content-md-center'>
        <Col md={6}>
          <h1>User Profile</h1>
        </Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3' md='4' controlId='formBasicFirstName'>
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              required
              type='text'
              defaultValue='John'
              name='name'
            />
            <Form.Control.Feedback type='invalid'>
              Please enter a name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicLastName'>
            <Form.Label>Enter last name</Form.Label>
            <Form.Control
              required
              type='text'
              defaultValue='Doe'
              name='lastname'
            />
            <Form.Control.Feedback type='invalid'>
              Please enter last name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicEmail'>
            <Form.Label>Enter email</Form.Label>
            <Form.Control disabled value='johndoe@gmail.com' />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicPhone'>
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your phone number'
              defaultValue=''
            />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicAddress'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your street name and house number'
              defaultValue=''
            />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicCountry'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your country'
              defaultValue=''
            />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicZip'>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your zip code'
              defaultValue=''
            />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicCity'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your city'
              defaultValue=''
            />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicState'>
            <Form.Label>State</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your state'
              defaultValue=''
            />
          </Form.Group>
          <Form.Group className='mb-3' md='4' controlId='formBasicPassword'>
            <Form.Label>Enter password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='Password'
              name='password'
              minLength={6}
              onChange={onChange}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter a valid password
            </Form.Control.Feedback>
            <Form.Text className='text-muted'>
              Password should have at least 6 characters
            </Form.Text>
          </Form.Group>
          <Form.Group
            className='mb-3'
            md='4'
            controlId='formBasicPasswordRepeat'
          >
            <Form.Label>Enter password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='Repeat Password'
              name='confirmPassword'
              minLength={6}
              onChange={onChange}
            />
            <Form.Control.Feedback type='invalid'>
              Both passwords should match
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update
          </Button>
          <Alert show={true} variant='danger'>
            User with that email already exists!
          </Alert>
          <Alert show={true} variant='success'>
            User updated
          </Alert>
        </Form>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
