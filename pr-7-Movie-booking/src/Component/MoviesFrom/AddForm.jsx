import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaFilm } from "react-icons/fa";
const AddForm = () => {
    const handalSubmit = (e) => {
        e.preventDefault()
    }

    
    return (
        <>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card className="shadow-lg border-0">
                            <Card.Body>
                                <h3 className="text-center mb-4 text-warning fw-bold"><span className="text-black">{<FaFilm />}</span> Add Movie</h3>
                                <Form onSubmit={handalSubmit}>
                                    <Form.Group className="mb-3" controlId="movieTitle">
                                        <Form.Label>Movie Title</Form.Label>
                                        <Form.Control type="text" placeholder="Enter movie title" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="movieTitle">
                                        <Form.Label>Movie Poster</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Poster Url" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="movieGenre">
                                        <Form.Label>Genre</Form.Label>
                                        <Form.Select>
                                            <option value="">Select genre</option>
                                            <option value="Action">Action</option>
                                            <option value="Comedy">Comedy</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Horror">Horror</option>
                                            <option value="Sci-Fi">Sci-Fi</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="movieDuration">
                                        <Form.Label>Duration (in minutes)</Form.Label>
                                        <Form.Control type="number" placeholder="e.g. 120" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="movieGenre">
                                        <Form.Label>Language </Form.Label>
                                        <Form.Select>
                                            <option value="">Select Language</option>
                                            <option value="Action">Hindi</option>
                                            <option value="Comedy">English</option>
                                            <option value="Drama">Spanish</option>
                                            <option value="Drama">French</option>                                            
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="movieReleaseDate">
                                        <Form.Label>Release Date</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <div className="text-center">
                                        <Button type="submit" variant="warning" className="fw-bold px-4">
                                            Add Movie
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AddForm