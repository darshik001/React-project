import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Card,
  Alert,
  Spinner,
  FormCheck,
  ProgressBar
} from "react-bootstrap";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { userSignInGoogleAsync, userSignUpAsync } from "../Services/Action/userAction";

const SignUp = () => {
  const inputFromstate = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [inputForm, setinputForm] = useState(inputFromstate);
  const [Errors,setErrors] = useState()

  const dispatch = useDispatch()
  const neviget = useNavigate()
  const {isCreated,user}  = useSelector(state=>state.userReducer)


  const handleChange = (e) => {
     const  {name,value} =e.target

     setinputForm({
      ...inputForm,
      [name]: value
     })
  };

  

  const handleErrors = () => {
    const errors = {};

    if (inputForm.name ===""){
      errors.nameErr = "Enter Product Name";
    } 
    
 if (inputForm.email ===""){
      errors.emailErr = "Enter Product Name";
    } 
     if (inputForm.password ===""){
      errors.passwordErr = "Enter Product Name";
    } 

     if (inputForm.confirmPassword ===""){
      errors.cpasswordErr = "Enter Product Name";
    } else if(inputForm.password !== inputForm.confirmPassword){
      errors.cpasswordErr = "Password Not Match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(handleErrors()){
     dispatch(userSignUpAsync(inputForm))
    }
  };


  useEffect(()=>{
   if(isCreated){
    setinputForm(inputFromstate)
     neviget('/signin')
   }
  },[isCreated])
 useEffect(()=>{
   if(user){
    setinputForm(inputForm)
    neviget('/')
   }
  },[user])

  const handleGoogleSignUp = () => {
    dispatch(userSignInGoogleAsync())
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <Card className="shadow border-0">
            <Card.Body className="p-4 p-sm-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold text-primary">Create Account</h3>
                <p className="text-muted">Sign up to get started with our service</p>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* Name Field */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-medium">Full Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <FaUser className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={inputForm.name}
                      onChange={handleChange}
                      className="border-start-0"
                    />
                  </InputGroup>

                  {Errors?.nameErr && <small className="text-danger">{Errors.nameErr}</small>}
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-medium">Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <FaEnvelope className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={inputForm.email}
                      onChange={handleChange}
                      className="border-start-0"
                    />
                  </InputGroup>
                  {Errors?.emailErr && <small className="text-danger">{Errors.emailErr}</small>}

                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className="fw-medium">Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <FaLock className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create a strong password"
                      value={inputForm.password}
                      onChange={handleChange}
                      className="border-start-0"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                      className="border-start-0"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                   {Errors?.passwordErr && <small className="text-danger">{Errors.passwordErr}</small>}
                </Form.Group>

                {/* Confirm Password Field */}
                <Form.Group className="mb-4" controlId="formConfirmPassword">
                  <Form.Label className="fw-medium">Confirm Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <FaLock className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      value={inputForm.confirmPassword}
                      onChange={handleChange}
                      className="border-start-0"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="border-start-0"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                 {Errors?.cpasswordErr && <small className="text-danger">{Errors.cpasswordErr}</small>}

                </Form.Group>

                

                {/* Sign Up Button */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-3 py-2 fw-medium"
                >
                    Create Account</Button>

                {/* Divider */}
                <div className="position-relative text-center my-4">
                  <hr className="w-100" />
                  <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                    Or sign up with
                  </span>
                </div>

                {/* Google Sign Up */}
                <Button
                  variant="outline-secondary"
                  className="w-100 mb-4 py-2 fw-medium"
                  onClick={handleGoogleSignUp}
                >
                  <FcGoogle className="me-2" size={20} />
                  Sign up with Google
                </Button>

                {/* Already have account link */}
                <div className="text-center pt-3 border-top">
                  <p className="text-muted mb-0">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-decoration-none fw-medium text-primary">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* Security Notice */}
          <Alert variant="light" className="text-center mt-4 small">
            <FaLock className="me-2" />
            Your information is securely encrypted and protected.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;