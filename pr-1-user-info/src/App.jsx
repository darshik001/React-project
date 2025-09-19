import './App.css'
import UserInfo from './Component/UserInfo'
import img1 from './assets/img-1.jpeg'
import img2 from './assets/img-2.jpeg'
import img3 from './assets/img-3.avif'
import img4 from './assets/img-4.jpeg'
import img5 from './assets/img-5.jpeg'
function App() {

  return (
    <>
      <h1>User Details</h1>
      <div className='user-grid'>

        <UserInfo image={img1} name="Aarav Sharma" email="Aarav@gmail.com" address='23, Shanti Nagar Society,
Near Iskcon Temple,
Ahmedabad, Gujarat – 380015' age={23} occupation="Front-End Developer " />

        <UserInfo image={img2} name="Kunal Mehta" email="Kunal@gmail.com" address='45, Green Park Apartment,
Opp. Reliance Mall,
Surat, Gujarat – 395007' age={25} occupation="Back-End Developer" />


        <UserInfo image={img3} name="Dhruv Desai" email="Dhruv@gmail.com" address='56, Pearl Heights Apartment,
Near MI Road,
Civil Lines,
Jaipur, Rajasthan – 302001' age={22} occupation="Full-Stack Developer" />
        <UserInfo image={img4} name="Sameer Reddy" email="Sameer@gmail.com" address='78, Royal Enclave,
Opp. City Palace,
Civil Lines,
Jaipur, Rajasthan – 302004' age={23} occupation="UI & UX Designer" />

        <UserInfo image={img5} name="Rohan Patel" email="Rohan@gmail.com" address='102, Sunrise Residency,
Near GVK One Mall,
Banjara Hills,
Hyderabad, Telangana – 500034' age={30} occupation="Software Engineer" />
      </div>
    </>
  )
}

export default App
