import { useEffect, useState } from "react";
import { getStroregeData } from "../Services/StorageData";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaFilm,
  FaList,
  FaGlobe,
  FaClock,
  FaCalendarAlt,
  FaIndustry,
} from "react-icons/fa";

const Bollywood=()=> {
  const [movies, setMovies] = useState([]);


useEffect(() => {
    const storedMovies = getStroregeData() || [];
    const bollywoodMovies = storedMovies.filter((movie) => movie.industry === "Bollywood");
    console.log(bollywoodMovies)
    setMovies(bollywoodMovies);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center text-warning fw-bold mb-4">
        <FaFilm className="me-2 text-black" />
        Movie Collection
      </h2>

      {movies.length === 0 ? (
        <h5 className="text-center text-muted">No movies added yet.</h5>
      ) : (
        <Row className="g-4">
          {movies.map((movie, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={movie.id || index}>
              <Card className="h-100 shadow-sm border-0">
                {/* Poster Image */}
                <div
                  style={{
                    width: "100%",
                    height: "340px",
                    overflow: "hidden",
                    backgroundColor: "#f8f9fa",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                >
                  <Card.Img variant="top" src={movie.posterUrl}
                    alt={movie.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>

                {/* Movie Info */}
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
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Bollywood