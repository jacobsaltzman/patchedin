import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
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
    </footer>
  );
}

export default Footer;