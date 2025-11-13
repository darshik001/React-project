import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/StorageData";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaFilm, FaList, FaGlobe, FaClock, FaCalendarAlt, FaIndustry, FaSearch, FaRedoAlt, FaSortAlphaUp, FaSortAlphaDownAlt, FaTrash, FaEdit, } from "react-icons/fa";
import { useNavigate } from "react-router";

const Hollywood = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const navigation = useNavigate()

  useEffect(() => {
    const storedMovies = getStorageData() || [];
    const HollywoodMovies = storedMovies.filter((movie) => movie.industry === "Hollywood");
    setMovies(HollywoodMovies);
  }, []);

  const handalSearch = () => {
    const storedMovies = getStorageData() || [];
    const hollywoodMovies = storedMovies.filter(
      (movie) => movie.industry === "Hollywood"
    );

    const filtered = hollywoodMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovie.toLowerCase()) ||
      movie.language.toLowerCase().includes(searchMovie.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchMovie.toLowerCase())
    )
    setMovies(filtered)
    setSearchMovie("");

  }

  const handalAsc = () => {
    const stored = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
    setMovies(stored)
  }

  const handalDesc = () => {
    const stored = [...movies].sort((a, b) =>
      b.title.localeCompare(a.title)
    )
    setMovies(stored)
  }

  const handalReset = () => {
    const storedMovies = getStorageData() || [];
    const HollywoodMovies = storedMovies.filter((movie) => movie.industry === "Hollywood");
    setMovies(HollywoodMovies)
  }

  const handalDelete = (id) => {
    const storedMovies = getStorageData() || [];
    const filterdData = storedMovies.filter((movie) => movie.id !== id)
    // setStorageData (filterdData)
    setStorageData(filterdData)
    const HollywoodMovies = filterdData.filter((movie) => movie.industry === "Hollywood");

    setMovies(HollywoodMovies)
  }


  const handalEdit = (id) => {
    navigation(`/edtmovie/${id}`)
  }
  return (
    <Container className="mt-4">
      <h2 className="text-center text-warning fw-bold mb-4">
        <FaFilm className="me-2 text-black" />
        Movie Collection
      </h2>

      <div className="d-flex justify-content-center align-items-center mb-4 flex-wrap" style={{ maxWidth: "900px", margin: "0 auto", gap: "8px" }}>

        <InputGroup style={{ flex: 1, minWidth: "200px" }}>
          <Form.Control type="text" placeholder="Search by movie title or language..." value={searchMovie} onChange={e => setSearchMovie(e.target.value)} />
          <Button variant="warning" onClick={handalSearch}>
            <FaSearch className="me-1" /> Search
          </Button>
        </InputGroup>

        <Button variant="secondary" onClick={handalReset}>
          <FaRedoAlt className="me-1" /> Reset
        </Button>

        <Button variant="outline-warning" onClick={handalAsc}>
          <FaSortAlphaUp className="me-1" /> A–Z
        </Button>

        <Button variant="outline-warning" onClick={handalDesc}>
          <FaSortAlphaDownAlt className="me-1" /> Z–A
        </Button>


      </div>

      {movies.length === 0 ? (
        <h5 className="text-center text-muted">No movies added yet.</h5>
      ) : (
        <Row className="g-4">
          {movies.map((movie, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={movie.id || index}>
              <Card className="h-100 shadow-sm border-0">
                <div style={{ width: "100%", height: "340px", overflow: "hidden", backgroundColor: "#f8f9fa", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}>

                  <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />

                </div>

                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="fw-bold text-center text-primary mb-3">
                    <FaFilm className="me-2 text-warning" />
                    {movie.title}
                  </Card.Title>

                  <div className="text-secondary" style={{ fontSize: "0.95rem" }}>
                    <p className="mb-2">
                      <FaList className="me-2 text-secondary" />
                      <strong>Genre:</strong> {movie.genre || "N/A"}
                    </p>
                    <p className="mb-2">
                      <FaIndustry className="me-2 text-secondary" />
                      <strong>Industry:</strong> {movie.industry || "N/A"}
                    </p>
                    <p className="mb-2">
                      <FaGlobe className="me-2 text-secondary" />
                      <strong>Language:</strong> {movie.language || "N/A"}
                    </p>
                    <p className="mb-2">
                      <FaClock className="me-2 text-secondary" />
                      <strong>Duration:</strong>{" "}
                      {movie.duration ? `${movie.duration} min` : "N/A"}
                    </p>
                    <p className="mb-0">
                      <FaCalendarAlt className="me-2 text-secondary" />
                      <strong>Release:</strong> {movie.date || "N/A"}
                    </p>
                  </div>
                </Card.Body>
                <Card.Footer className="text-center bg-light">
                  <Button variant="outline-danger" size="sm" className="me-2 px-3" onClick={() => handalDelete(movie.id)}>
                    <FaTrash className="me-1" /> Delete
                  </Button>

                  <Button variant="outline-primary" size="sm" className="px-3" onClick={() => handalEdit(movie.id)}>
                    <FaEdit className="me-1" /> Edit
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Hollywood