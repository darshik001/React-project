import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/StorageData";
import { Card, Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";
import { FaFilm, FaList, FaGlobe, FaClock, FaCalendarAlt, FaIndustry, FaSearch, FaRedoAlt, FaSortAlphaUp, FaSortAlphaDownAlt, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const navigation = useNavigate()
  useEffect(() => {
    const storedMovies = getStorageData() || [];
    setMovies(storedMovies);
  }, []);

  const handalSearch = () => {
    const storedMovies = getStorageData() || [];
    const filtered = storedMovies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchMovie.toLowerCase()) ||
        movie.language.toLowerCase().includes(searchMovie.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setMovies(filtered);
    setSearchMovie("");
  };

  const handalReset = () => {
    const storedMovies = getStorageData() || [];
    setMovies(storedMovies);
    setSearchMovie("");
  };

  const handalAsc = () => {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
  };

  const handalDesc = () => {
    const sorted = [...movies].sort((a, b) => b.title.localeCompare(a.title));
    setMovies(sorted);
  };

  const handalDelete = (id) => {
    const storedMovies = getStorageData() || [];
    const filterdData = storedMovies.filter((movie) => movie.id !== id)
    setStorageData(filterdData)
    setMovies(filterdData)
  }


  const handalEdit = (id) => {
    navigation(`/edtmovie/${id}`)
  }
  return (
    <Container className="mt-4">
      <div className="text-center mb-4">
        <h2 className="text-warning fw-bold">
          <FaFilm className="me-2 text-black" />
          Movie Collection
        </h2>
      </div>

      <div
        className="d-flex justify-content-center align-items-center mb-4 flex-wrap"
        style={{ maxWidth: "900px", margin: "0 auto", gap: "8px" }}
      >
        <InputGroup style={{ flex: 1, minWidth: "200px" }}>
          <Form.Control placeholder="Search by movie title or language..." value={searchMovie} onChange={(e) => setSearchMovie(target.value)} />

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
        <h5 className="text-center text-muted">No movies found.</h5>
      ) : (
        <Row className="g-4">
          {movies.map((movie, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={movie.id || index}>
              <Card className="h-100 shadow-sm border-0">
                <div
                  style={{ width: "100%", height: "340px", overflow: "hidden", backgroundColor: "#f8f9fa", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", }}>
                  <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", }} />
                </div>

                <Card.Body>
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
                  <Button variant="outline-danger" size="sm" className="me-2 px-3" onClick={() => handalDelete(movie.id)}><FaTrash className="me-1" /> Delete
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
};

export default Home;
