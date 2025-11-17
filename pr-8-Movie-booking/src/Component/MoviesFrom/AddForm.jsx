import { Container, Row, Col, Form, Button, Card, InputGroup } from "react-bootstrap";
import { FaFilm, FaCalendarAlt, FaGlobe, FaClock, FaPhotoVideo, FaList, FaHeading } from "react-icons/fa";
import { useEffect, useState } from "react";
import generateUniqueId from "generate-unique-id";
import { getStorageData, setStorageData } from "../Services/StorageData";
import { useNavigate } from "react-router";

const AddForm = () => {

  const navigation = useNavigate()

  const initialValues = {
    id: "",
    title: "",
    posterUrl: "",
    genre: "",
    industry: "",
    duration: "",
    language: "",
    date: "",
  };

  const storedData = getStorageData() || [];

  const [inputForm, setInputForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [storage, setStorage] = useState(storedData);

  useEffect(() => {
    setStorageData(storage);
  }, [storage]);

  const handalChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (inputForm.title.trim() === "") newErrors.title = "Please enter the movie title";
    if (inputForm.posterUrl.trim() === "") newErrors.posterUrl = "Please enter the poster URL";
    if (inputForm.genre === "") newErrors.genre = "Please select a genre";
    if (inputForm.industry === "") newErrors.industry = "Please select an industry";
    if (inputForm.duration === "" || inputForm.duration <= 0) newErrors.duration = "Enter a valid duration";
    if (inputForm.language === "") newErrors.language = "Please select a language";
    if (inputForm.date === "") newErrors.date = "Please select a release date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handalSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newMovie = {
        ...inputForm,
        id: "PR@" + generateUniqueId({ length: 10, useLetters: false }),
      };

      setStorage([...storage, newMovie]);
      setInputForm(initialValues);
      setErrors({});
      navigation('/')
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg border-0">
            <Card.Body>
              <h3 className="text-center mb-4 text-warning fw-bold">
                <span className="text-black">
                  <FaFilm />
                </span>{" "}
                Add Movie
              </h3>

              <Form onSubmit={handalSubmit}>
                <Form.Group className="mb-3" controlId="movieTitle">
                  <Form.Label>
                    Movie Title <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaHeading />
                    </InputGroup.Text>
                    <Form.Control type="text" name="title" value={inputForm.title} onChange={handalChange} placeholder="Enter movie title" />
                  </InputGroup>
                  {errors.title && <Form.Text className="text-danger">{errors.title}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="posterUrl">
                  <Form.Label>
                    Poster URL <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaPhotoVideo />
                    </InputGroup.Text>
                    <Form.Control type="text" name="posterUrl" value={inputForm.posterUrl} onChange={handalChange} placeholder="Enter Poster URL" />
                  </InputGroup>
                  {errors.posterUrl && <Form.Text className="text-danger">{errors.posterUrl}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="movieGenre">
                  <Form.Label>
                    Genre <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaList />
                    </InputGroup.Text>
                    <Form.Select name="genre" value={inputForm.genre} onChange={handalChange}>
                      <option value="">Select genre</option>
                      <option value="Action">Action</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Drama">Drama</option>
                      <option value="Horror">Horror</option>
                      <option value="Sci-Fi">Sci-Fi</option>
                      <option value="Romance">Romance</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Documentary">Documentary</option>
                    </Form.Select>
                  </InputGroup>
                  {errors.genre && <Form.Text className="text-danger">{errors.genre}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="movieIndustry">
                  <Form.Label>
                    Industry <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaList />
                    </InputGroup.Text>
                    <Form.Select name="industry" value={inputForm.industry} onChange={handalChange}>
                      <option value="">Select Industry</option>
                      <option value="Hollywood">Hollywood</option>
                      <option value="Bollywood">Bollywood</option>
                    </Form.Select>
                  </InputGroup>
                  {errors.industry && <Form.Text className="text-danger">{errors.industry}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="movieDuration">
                  <Form.Label>
                    Duration (minutes) <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaClock />
                    </InputGroup.Text>
                    <Form.Control type="number" name="duration" value={inputForm.duration} onChange={handalChange} placeholder="e.g. 120" />
                  </InputGroup>
                  {errors.duration && <Form.Text className="text-danger">{errors.duration}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="movieLanguage">
                  <Form.Label>
                    Language <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaGlobe />
                    </InputGroup.Text>
                    <Form.Select name="language" value={inputForm.language} onChange={handalChange}>
                      <option value="">Select Language</option>
                      <option value="Hindi">Hindi</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="Tamil">Tamil</option>
                      <option value="Telugu">Telugu</option>
                      <option value="Korean">Korean</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Chinese">Chinese</option>
                    </Form.Select>
                  </InputGroup>
                  {errors.language && <Form.Text className="text-danger">{errors.language}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="movieReleaseDate">
                  <Form.Label>
                    Release Date <span className="text-danger">*</span>
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaCalendarAlt />
                    </InputGroup.Text>
                    <Form.Control type="date" name="date" value={inputForm.date} onChange={handalChange} />
                  </InputGroup>
                  {errors.date && <Form.Text className="text-danger">{errors.date}</Form.Text>}
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
  );
};

export default AddForm;
