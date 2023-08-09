import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Login(){
    return (
        <div>
            <Container className="panel mt-10">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="UserID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="primary" type="submit" className="text-black font-bold">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login
