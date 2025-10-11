import { Col, Container, Row } from 'react-bootstrap';
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import './Contact.css'
import Location from '../ContactLocation/Location';
import ContactForm from '../ContactForm/Form';
const Contact = () => {
  return (
    <>
        <div className='currant-page w-100 py-2'>
          <p className='text-center mb-0'>Home - Contact Us 01</p>
        </div>
     <div className='pt-5'>
       <Container>
        <div className='text-center'>
          <h2 className='fw-bolder'>Keep In Touch with Us</h2>
          <Col sm={12} md={8} className='mx-auto'>
            <p className=' mx-auto text-color'>Were talking about clean beauty gift sets, of course – and weve got a bouquet of beauties for yourself or someone you love.</p>

          </Col>
        </div>

        <Row className='justify-content-around me-5 p-5 ps-0 '>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} md={2} className='mb-3 mb-md-0'>
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


          <Col xs={12} md={4}  className='my-5 my-md-0'>
            <Row>
              <Col xs={12} md={2} className='mb-3 mb-md-0'>

                <div>
                  <PiPhoneCallLight className='text-success fs-2' />
                </div>
              </Col>
              <Col xs={10} >
                <h3 className='fw-bold h5' >Contact</h3>
                <p className='mb-0 text-body-color'>Mobile: <span className='fw-bold'>068 26589 996</span></p>
                <p className='my-1 text-body-color'>Hotline: <span className='fw-bold'>1900 26886</span> </p>
                <p className='text-body-color'>E-mail: hello@grace.com</p>
              </Col>
            </Row>
          </Col>


          <Col xs={12} md={4}>
            <Row >
              <Col xs={12} md={2} className='mb-3 mb-md-0'>

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


        <Location/>
        <ContactForm/>
      </Container>
     </div>

    </>
  )
}

export default Contact;
