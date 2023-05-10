import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

function Footer() {

  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/subscribers', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Thanks for subscribing!');
        console.log(response)
        setEmail("")
      } else {
        console.error('Failed to subscribe:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Failed to subscribe:', error);
    });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col>
            <h5>App built by Jacob Saltzman, March 2023</h5>
          </Col>
          <Col className="text-right">
            <a href="https://www.linkedin.com/in/jacob-saltzman/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
            <a href="https://github.com/jacobsaltzman" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href="https://twitter.com/JacobSaltzman3" target="_blank" rel="noopener noreferrer">Twitter</a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h1>Subscribe to our newsletter!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <button type="submit">Subscribe</button>
        </form>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;