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
  FormCheck
} from "react-bootstrap";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux";
import { userSignInAsync, userSignInGoogleAsync } from "../Services/Action/userAction";

const SignIn = () => {

  const inputFromState = {
    email:"",
    password:"",
  }
  const [showPassword, setShowPassword] = useState(false);
  const [inputForm,setinputForm] = useState(inputFromState)
  const [Errors,setErrors] = useState()

  const dispatch = useDispatch()
  const neviget = useNavigate()
  const {user} = useSelector(state=>state.userReducer)
  console.log(user)
  const handalChange = (e)=>{
    const {name,value} = e.target 
    setinputForm({
      ...inputForm,
      [name]:value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(handalerror()){
  dispatch(userSignInAsync(inputForm))
      
    }
  };


  useEffect(()=>{
   if(user){
    console.log(user)
    setinputForm(inputFromState)
    neviget('/')
   }
  },[user])
 const handalerror = ()=>{
  let errors = {}
  if(inputForm.email == ""){
    errors.emailErr = "Enter Email"
  }
  if(inputForm.password == ""){
    errors.passwordErr = "Enter password"
  }
   setErrors(errors)
    return Object.keys(errors).length === 0;

 }

 const signInWithGoogle = ()=>{
  dispatch(userSignInGoogleAsync())
 }

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={5} xl={4}>
          <Card className="shadow border-0">
            <Card.Body className="p-4 p-sm-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold text-primary">Welcome Back</h3>
                <p className="text-muted">Sign in to continue to your account</p>
              </div>

              

              <Form onSubmit={handleSubmit}>
                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-medium">Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0">
                      <FaEnvelope className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      className="border-start-0"
                      name="email"
                      value={inputForm.email}
                      onChange={handalChange}
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
                      placeholder="Enter your password"
                      className="border-start-0"
                      name="password"
                      value={inputForm.password}
                      onChange={handalChange}
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

                {/* Remember Me Checkbox */}
                

                {/* Sign In Button */}
                <Button variant="primary" type="submit" className="w-100 mb-3 py-2 fw-medium">Sign In</Button>

                {/* Divider */}
                <div className="position-relative text-center my-4">
                  <hr className="w-100" />
                  <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                    Or continue with
                  </span>
                </div>

                {/* Google Sign In */}
                <Button
                  variant="outline-secondary"
                  className="w-100 mb-4 py-2 fw-medium"
                  onClick={signInWithGoogle}
                >
                  <FcGoogle className="me-2" size={20} />
                  Sign in with Google
                </Button>

                {/* Sign Up Link */}
                <div className="text-center pt-3 border-top">
                  <p className="text-muted mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-decoration-none fw-medium text-primary"
                    >
                      Create one now
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>

         
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;