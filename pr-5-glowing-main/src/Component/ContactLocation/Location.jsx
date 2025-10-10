import locationImg  from '../../assets/marker.webp'
import './location.css'
 const Location = ()=> {
  return (
    <>
   <div className='d-flex justify-content-around animation-main p-5'>
     <div className='mt-auto pe-5'>
      <div className='image-animation '>

         <img src={locationImg} alt="" />
    </div>
     </div>

     <div className='mb-auto ps-5'>
       <div className='image-animation'>

         <img src={locationImg} alt="" />
    </div>
     </div>
   </div>
    </>
  )



}
export default Location;
