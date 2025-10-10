import { Col, Container, Row } from 'react-bootstrap';
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import './Contact.css'
import Location from '../ContactLocation/Location';
const Contact = () => {
  return (
    <>

      <Container>
        <div className='text-center'>
          <h2 className='fw-bolder'>Keep In Touch with Us</h2>
          <p className='col-6 p-3  mx-auto text-color'>Were talking about clean beauty gift sets, of course – and weve got a bouquet of beauties for yourself or someone you love.</p>
        </div>

        <Row className='justify-content-around me-5 p-5 ps-0 '>
          <Col xs={3}>
            <Row>
              <Col xs={2}>
                <div>
                  <CiLocationOn className='text-success fs-2' />
                </div>
              </Col>
              <Col xs={10}>
                <h3 className='fw-bold h5'>Address</h3>
                <p className='text-body-color'>3245 Abbot Kinney BLVD - PH Venice, CA 124</p>
                <p className='text-body-color'>76 East Houston Street New York City</p>
                <a href="#" className='text-decoration-none text-black fw-bold under-line'>Get Direction</a>

              </Col>
            </Row>
          </Col>


          <Col xs={3}>
            <Row>
              <Col xs={2}>
                <div>
                  <PiPhoneCallLight className='text-success fs-2' />
                </div>
              </Col>
              <Col xs={10}>
                <h3 className='fw-bold h5' >Contact</h3>
                <p className='mb-0 text-body-color'>Mobile: <span className='fw-bold'>068 26589 996</span></p>
                <p className='my-1 text-body-color'>Hotline: <span className='fw-bold'>1900 26886</span> </p>
                <p className='text-body-color'>E-mail: hello@grace.com</p>
              </Col>
            </Row>
          </Col>


          <Col xs={3}>
            <Row >
              <Col xs={2}>
                <div>
                  <CiClock2 className='text-success fs-2' />
                </div>
              </Col>
              <Col xs={10}>
                <h3 className='fw-bold h5'>Hour of operation</h3>
                <p className='text-body-color mb-0'><span className='fw-medium text-black me-3'>Mon - Fri:</span>08:30 – 20:00</p>
                <p className='text-body-color '><span className='fw-medium text-black me-3'>Sat & Sun:</span>:09:30 – 21:30</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <div>
          <Location/>
        </div>
      </Container>

    </>
  )
}

export default Contact;
