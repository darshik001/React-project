import {Container} from 'react-bootstrap';
import { CiLocationOn ,CiClock2 } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import './Contact.css'
 const Contact=()=> {
  return (
    <>
  
<Container>
    <div className='text-center '>
      <h2 className='heding'>Keep In Touch with Us</h2>
      <p className='col-6 p-3  mx-auto'>We’re talking about clean beauty gift sets, of course – and we’ve got a bouquet of beauties for yourself or someone you love.</p>
    </div>

    <div className='row'>
      <div className='col-4'>
        <div className='row'>
          <div className='col-2 p-0'>
            <div className='contact-icon'>
              <CiLocationOn className='text-success fs-1'/>
            </div>
          </div>
          <div className='col-8 p-0'>
            <h3 className='heding'>Address</h3>
            <p className=''>3245 Abbot Kinney BLVD - PH Venice, CA 124</p>
            <p>76 East Houston Street New York City</p>
            <a href="#">Get Direction</a>
          </div>
        </div>
      </div>


        <div className='col-4'>
        <div className='row'>
          <div className='col-2 p-0'>
            <div className='contact-icon'>
              <PiPhoneCallLight className='text-success fs-1'/>
            </div>
          </div>
          <div className='col-8 p-0'>
            <h3>Address</h3>
            <p className='fs-6'>3245 Abbot Kinney BLVD - PH Venice, CA 124</p>
            <p>76 East Houston Street New York City</p>
            <a href="#">Get Direction</a>
          </div>
        </div>
      </div>


        <div className='col-4'>
        <div className='row'>
          <div className='col-2 p-0'>
            <div className='contact-icon'>
              <CiClock2 className='text-success fs-1'/>
            </div>
          </div>
          <div className='col-8 p-0'>
            <h3>Address</h3>
            <p className='text-color'>3245 Abbot Kinney BLVD - PH Venice, CA 124</p>
            <p>76 East Houston Street New York City</p>
            
          </div>
        </div>
      </div>
    </div>
       
</Container>
   
    </>
  )
}

export default Contact;
