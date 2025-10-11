import { Button, InputGroup } from 'react-bootstrap';
import { FaMinus,FaRegCompass ,FaCompass  } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import locationImg from '../../assets/marker.webp'
import './location.css'
const Location = () => {
  return (
    <>
      <div className='position-relative location-main p-5'>
        <div className='position-absolute location-item-1'>
          <div className='image-animation'>
            <img src={locationImg} alt="" />
          </div>
        </div>

        <div className='position-absolute location-item-2'>
          <div className='image-animation'>
            <img src={locationImg} alt="" />
          </div>
        </div>

     <div className='location-item-3'>
  <InputGroup className='flex-column'>
    <Button className=' rounded-0'><FaPlus /></Button>
    <Button className=''><FaMinus /></Button>
    <Button className='rounded-0'><FaCompass /></Button>
  </InputGroup>
</div>

      </div>
    </>
  )



}
export default Location;
