import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import sewadekorLogo from "./../assets/sewadekorLogo.png";
import "./Custom.css";
import { FloatingLabel, Image } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="4 pt-5">
          <Card className="p-0 shadow border-0">
            <Card.Title className="p-3 text-center">
              <Image
                src={sewadekorLogo}
                alt="sewadekor.id logo"
                className="sewadekor-logo border mb-3"
                roundedCircle
              />
            </Card.Title>
            <Card.Body className="text-start">
              <Form>
                <FloatingLabel
                  controlId="inputEmail"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="inputPassword"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Password"
                  />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="rememberMe">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <div className="text-center">
                  <Button variant="outline-success" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
